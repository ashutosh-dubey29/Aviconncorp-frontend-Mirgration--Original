import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

/**
 * Mock API interceptor for local development. Enable by adding `?useMock=1` to the URL
 * or by setting `localStorage.setItem('USE_MOCK_API', 'true')` in the browser.
 *
 * This interceptor short-circuits selected API calls and returns canned responses
 * so the UI can render while the real backend is unreachable.
 */
@Injectable()
export class MockApiInterceptor implements HttpInterceptor {
  private isMockEnabled(): boolean {
    try {
      if (typeof window !== 'undefined') {
        if ((window.location && window.location.search && window.location.search.indexOf('useMock=1') !== -1)) {
          return true;
        }
        const ls = window.localStorage && window.localStorage.getItem('USE_MOCK_API');
        if (ls === 'true') return true;
      }
    } catch (e) {
      // ignore
    }
    return false;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.isMockEnabled()) {
      return next.handle(req);
    }

    const url = req.url || '';
    // Only mock API calls that target the production API base URL
    if (!url.startsWith(environment.apiUrl)) {
      return next.handle(req);
    }

    const relative = url.substring(environment.apiUrl.length);

    // Example: mock tokens endpoint
    if (relative.startsWith('tokens')) {
      const body = [
        { id: 1, token: 'mock-token-123', user: 'mock-user', expires: null }
      ];
      return of(new HttpResponse({ status: 200, body }));
    }

    // Mock customer/site list used by many dashboards
    if (relative.startsWith('getCustomerSites') || relative.startsWith('getCustomerSites/')) {
      const body = [
        { site_id: 1, site_name: 'Mock Site A', customer: 'Mock Customer' },
        { site_id: 2, site_name: 'Mock Site B', customer: 'Mock Customer' }
      ];
      return of(new HttpResponse({ status: 200, body }));
    }

    // Mock site details
    if (relative.startsWith('site-details')) {
      const body = {
        id: 1,
        name: 'Mock Site A',
        address: '123 Mock St',
        timezone: 'UTC',
        meters: [{ id: 'M1', name: 'Main Meter' }]
      };
      return of(new HttpResponse({ status: 200, body }));
    }

    // Mock chart/graph endpoints (daily/hourly consumption)
    if (relative.startsWith('getSiteDailyConsumptionData') || relative.startsWith('getSiteHourlyConsumptionData') || relative.startsWith('getSiteHourlyConsumptionData/')) {
      const body = {
        categories: ['00:00','01:00','02:00','03:00','04:00','05:00'],
        series: [
          { name: 'Energy (kWh)', data: [10, 12, 9, 8, 11, 13] }
        ]
      };
      return of(new HttpResponse({ status: 200, body }));
    }

    // Mock baseline/fetchBaseline
    if (relative.startsWith('fetchBaseline') || relative.startsWith('saveBaseline')) {
      const body = { baseline: [{ date: '2025-11-01', value: 100 }], status: 'ok' };
      return of(new HttpResponse({ status: 200, body }));
    }

    // Mock live data endpoints used by live graphs
    if (relative.startsWith('liveDataLoadGraph') || relative.startsWith('liveDataEverySecond') || relative.includes('liveLoadData')) {
      const now = Date.now();
      const points = [] as any[];
      for (let i = 0; i < 10; i++) {
        points.push({ ts: now - (9 - i) * 1000, value: Math.round(50 + Math.random() * 10) });
      }
      return of(new HttpResponse({ status: 200, body: { points } }));
    }

    // Power source distribution endpoints
    if (relative.startsWith('getPowerSrcDistData') || relative.startsWith('getDailyPowerSrcDistData') || relative.startsWith('getDailyPowerSrcDistDataTime') || relative.startsWith('getHourlyPowerSrcDistDataTime') || relative.startsWith('getHourlyPowerSrcDistData')) {
      const body = {
        categories: ['Mains','DG','Solar'],
        series: [
          { name: 'Mains', data: [60, 58, 62] },
          { name: 'DG', data: [30, 33, 28] },
          { name: 'Solar', data: [10, 9, 10] }
        ]
      };
      return of(new HttpResponse({ status: 200, body }));
    }

    // Inventory endpoints
    if (relative.startsWith('saveInventoryData') || relative.startsWith('editInventoryData') || relative.startsWith('deleteInventoryData')) {
      return of(new HttpResponse({ status: 200, body: { status: 'ok' } }));
    }

    // Fire device endpoints
    if (relative.startsWith('fireDevicefetchdata')) {
      const body = [{ id: 1, name: 'Fire Pump 1', status: 'ok' }];
      return of(new HttpResponse({ status: 200, body }));
    }

    if (relative.startsWith('fireDeviceTypefetch')) {
      const body = [{ id: 1, type: 'Pump' }, { id: 2, type: 'Sensor' }];
      return of(new HttpResponse({ status: 200, body }));
    }

    if (relative.startsWith('fireDeviceTypeAdd')) {
      return of(new HttpResponse({ status: 200, body: { status: 'created' } }));
    }

    // Snapshot API
    if (relative.startsWith('snapShotApi') || relative.startsWith('fireDeviceSnapshotApi')) {
      const body = { snapshot: { uptime: 12345, load: 55 } };
      return of(new HttpResponse({ status: 200, body }));
    }

    // Lights / Fans endpoints
    if (relative.startsWith('lightsDataApi') || relative.startsWith('FansDataApi')) {
      const body = { series: [{ name: 'Load', data: [5,6,7,5,6] }], categories: ['A','B','C','D','E'] };
      return of(new HttpResponse({ status: 200, body }));
    }

    // Expired devices / avg data
    if (relative.startsWith('expireddevicesList')) {
      return of(new HttpResponse({ status: 200, body: [] }));
    }

    if (relative.startsWith('avgData')) {
      return of(new HttpResponse({ status: 200, body: { avg: 12.34 } }));
    }

    // Excel / download endpoints: return a small blob
    if (relative.toLowerCase().includes('download') || relative.toLowerCase().includes('excel') || relative.startsWith('downloadExcelLoadData') || relative.includes('dgFuelDataExcelExport') || relative.includes('downloadExcelPFData') || relative.includes('downloadExcelMonthlyMinMaxData')) {
      const blob = new Blob(["mock-excel-content"], { type: 'application/octet-stream' });
      return of(new HttpResponse({ status: 200, body: blob }));
    }

    // Power factor / monthly stats
    if (relative.startsWith('fluctuatedPowerFactorData') || relative.startsWith('monthlyMinMaxLoadData')) {
      const body = { series: [{ name: 'PF', data: [0.95,0.96,0.94] }], months: ['Oct','Nov','Dec'] };
      return of(new HttpResponse({ status: 200, body }));
    }

    // DG fuel endpoints
    if (relative.startsWith('dgFuelConsumptionData') || relative.startsWith('fetchDGFuelDataCustomeRange') || relative.startsWith('dgFuelMonthlyTrend')) {
      const body = { series: [{ name: 'Fuel (L)', data: [100, 120, 110] }], categories: ['Jan','Feb','Mar'] };
      return of(new HttpResponse({ status: 200, body }));
    }

    // Add other mocked endpoints here as needed. Default: pass-through.
    return next.handle(req);
  }
}
