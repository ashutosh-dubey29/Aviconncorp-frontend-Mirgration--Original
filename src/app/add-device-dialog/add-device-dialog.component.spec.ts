import { waitForAsync as async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { COMMON_TEST_IMPORTS, COMMON_TEST_PROVIDERS } from '../testing/test-helpers';

import { AddDeviceDialogComponent } from './add-device-dialog.component';

describe('AddDeviceDialogComponent', () => {
  let component: AddDeviceDialogComponent;
  let fixture: ComponentFixture<AddDeviceDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AddDeviceDialogComponent, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, MatDialogModule, ...COMMON_TEST_IMPORTS ],
      providers: [ ...COMMON_TEST_PROVIDERS ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDeviceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
