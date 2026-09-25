import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipment, EquipmentService, MaintenanceRecord } from '../../services/equipment.service';

@Component({
  selector: 'app-equipment-info',
  templateUrl: './equipment-info.component.html',
  styleUrls: ['./equipment-info.component.css']
})
export class EquipmentInfoComponent implements OnInit {

  equipment: Equipment | null = null;
  maintenanceRecords: MaintenanceRecord[] = [];
  equipmentId!: number;


  constructor(private route: ActivatedRoute, private equipmentService: EquipmentService, private router: Router) { }

  ngOnInit(): void {
    this.equipmentId = Number(this.route.snapshot.paramMap.get('id'));

    this.equipmentService.getEquipmentById(this.equipmentId).subscribe({
      next: (data) => {
        this.equipment = data;
      },
      error: (error) => {
        console.error('Error loading equipment:', error);
      }
    });

    this.loadMaintenanceRecords();
  }

  loadMaintenanceRecords(): void {
    this.equipmentService.getMaintenanceRecords(this.equipmentId).subscribe({
      next: (data) => {
        this.maintenanceRecords = data;
      },
      error: (error) => {
        console.error('Error loading maintenance records:', error);
      }
    });
  }



  goBack(): void {
    this.router.navigate(['/equipment']);
  }
}