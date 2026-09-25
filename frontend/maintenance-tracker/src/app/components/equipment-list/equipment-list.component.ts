import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipment, EquipmentService } from '../../services/equipment.service';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.css']
})
export class EquipmentListComponent implements OnInit {

  equipment: Equipment[] = [];

  constructor(private equipmentService: EquipmentService, private router: Router) { }

  ngOnInit(): void {
    this.equipmentService.getEquipment().subscribe({
      next: (data) => {
        this.equipment = data;
      },
      error: (error) => {
        console.error('Error loading equipment:', error);
      }
    });
  }

  openEquipment(item: Equipment): void {
    this.router.navigate(['/equipment', item.id]);
  }

  newEquipment(): void {
    this.router.navigate(['/equipment/new']);
  }

}