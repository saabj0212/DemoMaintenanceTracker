import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EquipmentService } from '../../services/equipment.service';

@Component({
  selector: 'app-maintenance-form',
  templateUrl: './maintenance-form.component.html',
  styleUrls: ['./maintenance-form.component.css']
})
export class MaintenanceFormComponent {

  @Input() equipmentId!: number;
  @Output() recordCreated = new EventEmitter<void>();

  maintenanceForm = this.formBuilder.group({
    date: ['', Validators.required],
    description: ['', Validators.required],
    technician: ['', Validators.required],
    cost: [0, [Validators.required, Validators.min(0)]]
  });

  errorMessage = '';

  constructor(private formBuilder: FormBuilder, private equipmentService: EquipmentService) { }

  submit(): void {
    if (this.maintenanceForm.invalid) {
      this.maintenanceForm.markAllAsTouched();
      return;
    }

    this.equipmentService.createMaintenanceRecord(this.equipmentId, this.maintenanceForm.value).subscribe({
      next: () => {
        this.maintenanceForm.reset({
          date: '',
          description: '',
          technician: '',
          cost: 0
        });

        this.recordCreated.emit();
      },
      error: (error) => {
        console.error('Error creating maintenance record:', error);
        this.errorMessage = 'Unable to create maintenance record.';
      }
    });
  }
}