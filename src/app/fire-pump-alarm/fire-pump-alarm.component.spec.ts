import { waitForAsync as async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { FirePumpAlarmComponent } from './fire-pump-alarm.component';

describe('FirePumpAlarmComponent', () => {
  let component: FirePumpAlarmComponent;
  let fixture: ComponentFixture<FirePumpAlarmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FirePumpAlarmComponent, MatTableModule, MatPaginatorModule, MatSortModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirePumpAlarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
