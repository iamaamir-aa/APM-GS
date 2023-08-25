import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuardGuard implements CanActivate {
  
  constructor( private router:Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const id:number=Number(route.paramMap.get('id'));
      if(id<1 || isNaN(id)){
        alert("INVALID NUMEBR");
        this.router.navigate(['/products']);
        return false;
      }


     

    return true;
  }
  
}
