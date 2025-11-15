import { waitForAsync as async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';

import { LoadDataTableComponent } from './load-data-table.component';
import { COMMON_TEST_IMPORTS, COMMON_TEST_PROVIDERS } from '../testing/test-helpers';

describe('LoadDataTableComponent', () => {
  let component: LoadDataTableComponent;
  let fixture: ComponentFixture<LoadDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ LoadDataTableComponent, MatTableModule, MatPaginatorModule, MatSortModule, MatDialogModule, ...COMMON_TEST_IMPORTS ],
      providers: [...COMMON_TEST_PROVIDERS]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
