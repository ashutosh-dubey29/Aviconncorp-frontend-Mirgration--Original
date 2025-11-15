import { waitForAsync as async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightsWattDataComponent } from './lights-watt-data.component';
import { COMMON_TEST_IMPORTS, COMMON_TEST_PROVIDERS } from '../testing/test-helpers';

describe('LightsWattDataComponent', () => {
  let component: LightsWattDataComponent;
  let fixture: ComponentFixture<LightsWattDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ LightsWattDataComponent, ...COMMON_TEST_IMPORTS ],
      providers: [...COMMON_TEST_PROVIDERS]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightsWattDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
