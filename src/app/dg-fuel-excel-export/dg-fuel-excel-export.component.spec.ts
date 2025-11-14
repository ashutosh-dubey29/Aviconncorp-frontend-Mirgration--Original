import { waitForAsync as async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { DgFuelExcelExportComponent } from './dg-fuel-excel-export.component';

describe('DgFuelExcelExportComponent', () => {
  let component: DgFuelExcelExportComponent;
  let fixture: ComponentFixture<DgFuelExcelExportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ DgFuelExcelExportComponent, ReactiveFormsModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DgFuelExcelExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
