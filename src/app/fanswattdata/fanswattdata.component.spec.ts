import { waitForAsync as async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';

import { FanswattdataComponent } from './fanswattdata.component';

describe('FanswattdataComponent', () => {
  let component: FanswattdataComponent;
  let fixture: ComponentFixture<FanswattdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FanswattdataComponent, MatTableModule, MatPaginatorModule, MatSortModule, MatDialogModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FanswattdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
