import { waitForAsync as async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { WhMeteringComponent } from './wh-metering.component';
import { COMMON_TEST_IMPORTS, COMMON_TEST_PROVIDERS } from '../testing/test-helpers';

describe('WhMeteringComponent', () => {
  let component: WhMeteringComponent;
  let fixture: ComponentFixture<WhMeteringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ WhMeteringComponent, ...COMMON_TEST_IMPORTS ],
      providers: [...COMMON_TEST_PROVIDERS]
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
