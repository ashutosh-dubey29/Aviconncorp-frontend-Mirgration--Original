import { waitForAsync as async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HighchartsStandaloneComponent } from '../highcharts/highcharts-standalone.component';
import { OutputGraphComponent } from './output-graph.component';
import { COMMON_TEST_IMPORTS, COMMON_TEST_PROVIDERS } from '../testing/test-helpers';

describe('OutputGraphComponent', () => {
  let component: OutputGraphComponent;
  let fixture: ComponentFixture<OutputGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ OutputGraphComponent, HighchartsStandaloneComponent, ...COMMON_TEST_IMPORTS ],
      providers: [...COMMON_TEST_PROVIDERS]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
