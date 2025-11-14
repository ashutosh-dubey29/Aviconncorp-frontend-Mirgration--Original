import { waitForAsync as async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { ExcelsheetComponent } from './excelsheet.component';

describe('ExcelsheetComponent', () => {
  let component: ExcelsheetComponent;
  let fixture: ComponentFixture<ExcelsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ExcelsheetComponent, ReactiveFormsModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
