import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SupabaseService } from '../supabase.service';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private readonly supabase: SupabaseService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.supabase.session?.access_token}`,
      },
    });

    return next.handle(request).pipe(
      catchError((error) => {
        if (error.status === 401) {
          this.supabase.signOut();
        }
        return throwError(() => new Error('test'));
      })
    );
  }
}
