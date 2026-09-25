using EquipmentMaintenance.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace EquipmentMaintenance.Api.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public DbSet<Equipment> Equipment => Set<Equipment>();

    public DbSet<MaintenanceRecord> MaintenanceRecords => Set<MaintenanceRecord>();
}