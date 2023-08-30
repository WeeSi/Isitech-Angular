import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { SupabaseService } from '../../services/supabase.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private supabase: SupabaseService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    try {
      if (this.supabase._session?.user) {
        return of(true);
      } else {
        return of(this.router.createUrlTree(['/']));
      }
    } catch (error) {
      console.error('Error checking authentication:', error);
      return of(this.router.createUrlTree(['/']));
    }
  }
}
