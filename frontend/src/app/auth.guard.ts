import { Injectable } from '@angular/core';
import { Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanLoad {

  constructor(
    private router: Router
  ) { }

  canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
    let token = localStorage.getItem('token');

    if (token) {
      console.log('teste');
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}