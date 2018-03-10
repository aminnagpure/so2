import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie';

@Injectable()
export class NgxCookieService {

  constructor( private _cookieService: CookieService) { }

  setCookie(key, value) {
    console.log('id to be set as referral code', value);
    this._cookieService.put(key, value);
  }

  getCookie(query: string) {
    return this._cookieService.get(query);
  }

}
