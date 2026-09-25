import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentListComponent } from './components/equipment-list/equipment-list.component';
import { EquipmentInfoComponent } from './components/equipment-info/equipment-info.component';
import { EquipmentFormComponent } from './components/equipment-form/equipment-form.component';

const routes: Routes = [
  { path: 'equipment', component: EquipmentListComponent },
  { path: 'equipment/new', component: EquipmentFormComponent },
  { path: 'equipment/:id', component: EquipmentInfoComponent },
  { path: '', redirectTo: '/equipment', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
