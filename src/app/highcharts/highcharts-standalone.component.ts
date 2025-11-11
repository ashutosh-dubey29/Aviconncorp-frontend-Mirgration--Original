import { Component, Input, ViewChild, ElementRef, AfterViewInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import * as Highcharts from 'highcharts';

/**
 * Standalone Highcharts wrapper component.
 * - `options` : Highcharts chart options object.
 * - `modules` : optional array of Highcharts module functions to initialize (e.g. boost, no-data-to-display).
 * - `updateFlag` : toggled by the parent to force an update of the chart when options change.
 *
 * Usage example (standalone import):
 * <app-highcharts [options]="chartOptions" [modules]="[Boost, NoData]" [updateFlag]="chartUpdateFlag"></app-highcharts>
 *
 * This keeps Highcharts usage centralized and avoids relying on `highcharts-angular`.
 */
@Component({
  selector: 'app-highcharts',
  standalone: true,
  template: `<div #chartContainer style="width:100%;height:100%"></div>`,
})
export class HighchartsStandaloneComponent implements AfterViewInit, OnChanges, OnDestroy {
  @ViewChild('chartContainer', { static: true }) chartContainer!: ElementRef<HTMLDivElement>;
  @Input() options: Highcharts.Options | any = {};
  @Input() modules: Array<((hc: typeof Highcharts) => void) | null> | null = null;
  @Input() constructorType: string | null = null; // 'stockChart' | 'chart'
  @Input() updateFlag = false;

  private chart?: Highcharts.Chart;

  ngAfterViewInit(): void {
    this.initModules();
    // Create chart
    try {
      if (this.constructorType === 'stockChart' && (Highcharts as any).stockChart) {
        this.chart = (Highcharts as any).stockChart(this.chartContainer.nativeElement, this.options || {});
      } else {
        this.chart = (Highcharts as any).chart(this.chartContainer.nativeElement, this.options || {});
      }
    } catch (e) {
      // Fail gracefully in case of bad options
      // eslint-disable-next-line no-console
      console.error('Highcharts: failed to create chart', e);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.chart && (changes['options'] && !changes['options'].isFirstChange())) {
      // If chart wasn't created yet but options changed, try to create it
      this.initModules();
      try {
        this.chart = Highcharts.chart(this.chartContainer.nativeElement, this.options || {});
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('Highcharts: failed to create chart on changes', e);
      }
      return;
    }

    if (this.chart && (changes['options'] || (changes['updateFlag'] && !changes['updateFlag'].isFirstChange()))) {
      // Use Highcharts API to update the existing chart
      try {
        this.chart.update(this.options || {}, true, true);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('Highcharts: failed to update chart', e);
      }
    }
  }

  ngOnDestroy(): void {
    try {
      this.chart?.destroy();
    } catch {
      // ignore
    }
  }

  private initModules(): void {
    if (!this.modules || this.modules.length === 0) {
      return;
    }
    try {
      this.modules.forEach(mod => {
        if (typeof mod === 'function') {
          mod(Highcharts as any);
        }
      });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('Highcharts: failed to initialize modules', e);
    }
  }
}
