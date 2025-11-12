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

    // Add other mocked endpoints here as needed. Default: pass-through.
    return next.handle(req);
  }
}
