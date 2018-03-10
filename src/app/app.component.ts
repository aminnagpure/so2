import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {NgxCookieService} from "./layout-placeholder/shared/service/cookie.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  routeSubscription : Subscription;

  constructor( private route: ActivatedRoute,
               private router: Router,
               private cookieService: NgxCookieService) {}

  ngOnInit() {
    this.routeSubscription = this.checkParams();
  }

  checkParams() {
    return this.route
      .queryParams
      .subscribe(params => {
        const refId = params['rfb'];
        if (refId) {
          this.cookieService.setCookie('rfb', refId);
          this.router.navigate(['register']);
        } else {
          console.log('referral is not available');
        }
      });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

}
