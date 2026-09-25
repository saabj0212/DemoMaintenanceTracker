import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentInfoComponent } from './equipment-info.component';

describe('EquipmentInfoComponent', () => {
  let component: EquipmentInfoComponent;
  let fixture: ComponentFixture<EquipmentInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipmentInfoComponent]
    });
    fixture = TestBed.createComponent(EquipmentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
