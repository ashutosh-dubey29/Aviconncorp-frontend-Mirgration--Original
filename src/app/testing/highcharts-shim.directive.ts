import { Directive, Input } from '@angular/core';

@Directive({ selector: 'highcharts-chart' })
export class HighchartsShimDirective {
  @Input() Highcharts: any;
  @Input() constructorType: any;
  @Input() options: any;
  @Input() callbackFunction: any;
  @Input() update: any;
  @Input() oneToOne: any;
}
