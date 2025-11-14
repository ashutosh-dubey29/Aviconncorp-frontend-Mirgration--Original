import { waitForAsync as async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';

import { ExpiredDeviceDetailsFemsComponent } from './expired-device-details-fems.component';

describe('ExpiredDeviceDetailsFemsComponent', () => {
  let component: ExpiredDeviceDetailsFemsComponent;
  let fixture: ComponentFixture<ExpiredDeviceDetailsFemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ExpiredDeviceDetailsFemsComponent, MatTableModule, MatPaginatorModule, MatSortModule, MatDialogModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpiredDeviceDetailsFemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
