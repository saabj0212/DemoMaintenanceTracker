import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Equipment {
  id: number;
  make: string;
  model: string;
  serialNumber: string;
  warehouseLocation: string;
  status: string;
  maintenanceCount: number;
}

export interface MaintenanceRecord {
  id: number;
  equipmentId: number;
  date: string;
  description: string;
  technician: string;
  cost: number;
}

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  private apiUrl = 'http://localhost:5274/api/equipment';

  constructor(private http: HttpClient) { }

  createEquipment(equipment: any): Observable<Equipment> {
    return this.http.post<Equipment>(this.apiUrl, equipment);
  }

  getEquipment(): Observable<Equipment[]> {
    return this.http.get<Equipment[]>(this.apiUrl);
  }
  
  getEquipmentById(id: number): Observable<Equipment> {
    return this.http.get<Equipment>(`${this.apiUrl}/${id}`);
  }

  createMaintenanceRecord(equipmentId: number, record: any): Observable<MaintenanceRecord> {
    return this.http.post<MaintenanceRecord>(`${this.apiUrl}/${equipmentId}/maintenance`, record);
  }
  
  getMaintenanceRecords(id: number): Observable<MaintenanceRecord[]> {
    return this.http.get<MaintenanceRecord[]>(`${this.apiUrl}/${id}/maintenance`);
  }

}