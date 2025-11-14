import { waitForAsync as async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';

import { DeviceDetailsFemsComponent } from './device-details-fems.component';

describe('DeviceDetailsFemsComponent', () => {
  let component: DeviceDetailsFemsComponent;
  let fixture: ComponentFixture<DeviceDetailsFemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ DeviceDetailsFemsComponent, MatTableModule, MatPaginatorModule, MatSortModule, MatDialogModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceDetailsFemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
