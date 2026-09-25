namespace EquipmentMaintenance.Api.Models;

public class MaintenanceRecord
{
    public int Id { get; set; }

    public int EquipmentId { get; set; }

    public DateTime Date { get; set; }

    public string Description { get; set; } = string.Empty;

    public string Technician { get; set; } = string.Empty;

    public decimal Cost { get; set; }
}