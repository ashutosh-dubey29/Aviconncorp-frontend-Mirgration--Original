import { waitForAsync as async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AddDevtypeDialogComponent } from './add-devtype-dialog.component';

describe('AddDevtypeDialogComponent', () => {
  let component: AddDevtypeDialogComponent;
  let fixture: ComponentFixture<AddDevtypeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AddDevtypeDialogComponent, ReactiveFormsModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDevtypeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
