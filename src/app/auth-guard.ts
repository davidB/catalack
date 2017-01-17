import { Injectable } from '@angular/core';
import { Directive, ElementRef, Input, HostBinding } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AccessTokenService } from './access-token.service';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private accessTokenService: AccessTokenService) {}

  canActivate() {
    if (this.accessTokenService.getUserAccessToken() != null) {
      return true;
    }

    // If not, they redirect them to the login page
    this.router.navigate(['/']);
    return false;
  }
}

// @Directive({ selector: '[secured]' })
// export class Secured {
//   @HostBinding('hidden')
//   hideRouterLink:boolean;
//
//   @Input('routerLink')
//   routeParams:string;
//
//   constructor(private router:Router) {
//   }
//
//   ngAfterViewInit() {
//    // var instruction = this.router.generate(this.routeParams);
//    // var data = instruction.component.routeData.data;
//     this.hideRouterLink = true; //this.shouldBeHidden(data);
//   }
// }
