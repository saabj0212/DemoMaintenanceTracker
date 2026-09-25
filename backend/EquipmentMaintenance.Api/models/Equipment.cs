namespace EquipmentMaintenance.Api.Models;

public class Equipment
{
    public int Id { get; set; }

    public string Make { get; set; } = string.Empty;

    public string Model { get; set; } = string.Empty;

    public string SerialNumber { get; set; } = string.Empty;

    public string WarehouseLocation { get; set; } = string.Empty;

    public string Status { get; set; } = "Active";

    public List<MaintenanceRecord> MaintenanceRecords { get; set; } = [];
}