import { waitForAsync as async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { WhMeteringComponent } from './wh-metering.component';

describe('WhMeteringComponent', () => {
  let component: WhMeteringComponent;
  let fixture: ComponentFixture<WhMeteringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ WhMeteringComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhMeteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
