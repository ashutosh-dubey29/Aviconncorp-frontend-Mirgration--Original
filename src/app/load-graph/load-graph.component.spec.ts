import { waitForAsync as async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadGraphComponent } from './load-graph.component';
import { COMMON_TEST_IMPORTS, COMMON_TEST_PROVIDERS } from '../testing/test-helpers';

describe('LoadGraphComponent', () => {
  let component: LoadGraphComponent;
  let fixture: ComponentFixture<LoadGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ LoadGraphComponent, ...COMMON_TEST_IMPORTS ],
      providers: [...COMMON_TEST_PROVIDERS]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
