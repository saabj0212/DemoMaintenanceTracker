using EquipmentMaintenance.Api.Data;
using EquipmentMaintenance.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace EquipmentMaintenance.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EquipmentController : ControllerBase
{
    private readonly AppDbContext _context;

    public EquipmentController(AppDbContext context)
    {
        _context = context;
    }

    //EQUIPMENT ENDPOINTS
    [HttpGet]
    public async Task<IActionResult> GetEquipment()
    {
        var equipment = await _context.Equipment
        .Select(e => new
        {
            e.Id,
            e.Make,
            e.Model,
            e.SerialNumber,
            e.WarehouseLocation,
            e.Status,
            MaintenanceCount = e.MaintenanceRecords.Count
        }).ToListAsync();

        return Ok(equipment);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetEquipmentById(int id)
    {
        var equipment = await _context.Equipment.FindAsync(id);

        if (equipment == null)
        {
            return NotFound();
        }

        return Ok(equipment);
    }

    [HttpPost]
    public async Task<IActionResult> CreateEquipment(Equipment equipment)
    {
        _context.Equipment.Add(equipment);
        await _context.SaveChangesAsync();

        return CreatedAtAction(
            nameof(GetEquipmentById),
            new { id = equipment.Id },
            equipment);
    }

    //MAINTENANCE RECORD ENDPOINTS
    [HttpGet("{id}/maintenance")]
    public async Task<IActionResult> GetMaintenanceRecords(int id)
    {
        var equipmentExists = await _context.Equipment.AnyAsync(e => e.Id == id);

        if (!equipmentExists)
        {
            return NotFound();
        }

        var records = await _context.MaintenanceRecords
            .Where(m => m.EquipmentId == id)
            .OrderByDescending(m => m.Date)
            .ToListAsync();

        return Ok(records);
    }

    [HttpPost("{id}/maintenance")]
    public async Task<IActionResult> CreateMaintenanceRecord(int id, MaintenanceRecord maintenanceRecord){
        var equipmentExists = await _context.Equipment.AnyAsync(e => e.Id == id);

        if (!equipmentExists)
        {
            return NotFound();
        }

        maintenanceRecord.EquipmentId = id;

        _context.MaintenanceRecords.Add(maintenanceRecord);
        await _context.SaveChangesAsync();

        return CreatedAtAction(
            nameof(GetMaintenanceRecords),
            new { id = id },
            maintenanceRecord);
    }
}