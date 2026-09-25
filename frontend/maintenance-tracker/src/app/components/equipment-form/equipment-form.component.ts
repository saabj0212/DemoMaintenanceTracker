import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EquipmentService } from '../../services/equipment.service';

@Component({
  selector: 'app-equipment-form',
  templateUrl: './equipment-form.component.html',
  styleUrls: ['./equipment-form.component.css']
})
export class EquipmentFormComponent {

  equipmentForm = this.formBuilder.group({
    make: ['', Validators.required],
    model: ['', Validators.required],
    serialNumber: ['', Validators.required],
    warehouseLocation: ['', Validators.required],
    status: ['Active', Validators.required],
  });

  errorMessage = '';

  constructor(private formBuilder: FormBuilder, private equipmentService: EquipmentService, private router: Router) { }

  submit(): void {
    if (this.equipmentForm.invalid) {
      this.equipmentForm.markAllAsTouched();
      return;
    }

    this.equipmentService.createEquipment(this.equipmentForm.value).subscribe({
      next: () => {
        this.router.navigate(['/equipment']);
      },
      error: (error) => {
        console.error('Error creating equipment:', error);
        this.errorMessage = 'Unable to create equipment.';
      }
    });

    this.router.navigate(['/equipment']);
  }

  cancel(): void {
    this.router.navigate(['/equipment']);
  }
}