using EquipmentMaintenance.Api.Models;

namespace EquipmentMaintenance.Api.Data;

public static class DbInitializer
{
    public static void Initialize(AppDbContext context)
    {
        if (context.Equipment.Any())
        {
            return;
        }
        
        var equipment = new Equipment[]
        {
            new Equipment
            {
                Make = "Xeron",
                Model = "G-320",
                SerialNumber = "XF7UI9086",
                WarehouseLocation = "Chicago",
                Status = "Active"
            },
            new Equipment
            {
                Make = "Xeron",
                Model = "G-320",
                SerialNumber = "XFR44T907",
                WarehouseLocation = "Chicago",
                Status = "Active"
            },
            new Equipment
            {
                Make = "GenTech",
                Model = "Fermy Lite",
                SerialNumber = "U79235",
                WarehouseLocation = "Dallas",
                Status = "Maintenance"
            },
            new Equipment
            {
                Make = "GenTech",
                Model = "JetWatcher",
                SerialNumber = "898TTX4",
                WarehouseLocation = "Dallas",
                Status = "Active"
            }
        };

        context.Equipment.AddRange(equipment);
        context.SaveChanges();


        var maintenanceRecords = new MaintenanceRecord[]
        {
            new MaintenanceRecord
            {
                EquipmentId = equipment[0].Id,
                Date = new DateTime(2026, 9, 1),
                Description = "Replaced leaky thingamajig",
                Technician = "John Smith",
                Cost = 550.00m
            },
            new MaintenanceRecord
            {
                EquipmentId = equipment[0].Id,
                Date = new DateTime(2026, 7, 14),
                Description = "Tigten bolts on nozzle assembly",
                Technician = "Jason Jacobs",
                Cost = 100.00m
            },
            new MaintenanceRecord
            {
                EquipmentId = equipment[1].Id,
                Date = new DateTime(2026, 4, 2),
                Description = "Hydraulics inspection",
                Technician = "Alice Inspector",
                Cost = 75.00m
            },
            new MaintenanceRecord
            {
                EquipmentId = equipment[2].Id,
                Date = new DateTime(2026, 8, 20),
                Description = "Replaced worn-out bearings",
                Technician = "Bobby Bearins",
                Cost = 190.00m
            },
            new MaintenanceRecord
            {
                EquipmentId = equipment[2].Id,
                Date = new DateTime(2026, 9, 10),
                Description = "Fixed faulty control switches",
                Technician = "Johnny Fixit",
                Cost = 365.00m
            },
            new MaintenanceRecord
            {
                EquipmentId = equipment[3].Id,
                Date = new DateTime(2026, 6, 18),
                Description = "Inspected water pump",
                Technician = "Perry Person",
                Cost = 85.00m
            }
        };

        context.MaintenanceRecords.AddRange(maintenanceRecords);
        context.SaveChanges();
    }
}