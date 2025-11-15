import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class NetworkErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err: any) => {
        // If it's a network-level error (status 0) or DNS resolution error,
        // show a simple overlay so the user knows the backend is unreachable.
        if (err instanceof HttpErrorResponse) {
          if (err.status === 0 || !err.status) {
            try {
              const id = 'network-error-overlay';
              let overlay = document.getElementById(id);
              if (!overlay) {
                overlay = document.createElement('div');
                overlay.id = id;
                overlay.style.position = 'fixed';
                overlay.style.top = '0';
                overlay.style.left = '0';
                overlay.style.right = '0';
                overlay.style.background = '#b00020';
                overlay.style.color = 'white';
                overlay.style.padding = '10px';
                overlay.style.zIndex = '2147483646';
                overlay.style.fontFamily = 'sans-serif';
                overlay.style.textAlign = 'center';
                overlay.textContent = 'Network error: unable to reach backend API. Some data may be unavailable.';
                document.body.appendChild(overlay);
              }
            } catch (e) {
              // ignore DOM errors in interceptor
            }
          }
        }
        return throwError(() => err);
      })
    );
  }
}
