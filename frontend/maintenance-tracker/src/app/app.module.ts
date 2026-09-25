import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EquipmentListComponent } from './components/equipment-list/equipment-list.component';
import { EquipmentInfoComponent } from './components/equipment-info/equipment-info.component';
import { EquipmentFormComponent } from './components/equipment-form/equipment-form.component';
import { MaintenanceFormComponent } from './components/maintenance-form/maintenance-form.component';


@NgModule({
  declarations: [
    AppComponent,
    EquipmentListComponent,
    EquipmentInfoComponent,
    EquipmentFormComponent,
    MaintenanceFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
