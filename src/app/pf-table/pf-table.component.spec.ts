import { waitForAsync as async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';

import { PfTableComponent } from './pf-table.component';

describe('PfTableComponent', () => {
  let component: PfTableComponent;
  let fixture: ComponentFixture<PfTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ PfTableComponent, MatTableModule, MatPaginatorModule, MatSortModule, MatDialogModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
