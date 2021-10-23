import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { isUndefined } from 'lodash';
import * as moment from 'moment';
import 'moment/min/locales.min';
import { Observable, Subject, Subscription } from 'rxjs';

declare var $: any;
//declare var Notyf: any;
//declare var numeral: any;

@Injectable({
  providedIn: "root",
})
export class UtilsService {
  //_notyf = new Notyf();
  _moment = moment;

  private changeLangDir = new Subject();
  public changeLangDir$: Observable<{}> = this.changeLangDir.asObservable();

  constructor(@Inject(DOCUMENT) private document: Document, private titleService: Title
  ) { }





  /**
    * Method to convert the file to base64
    */
  toBase64(file: File, cb: Function) {
    const fileReader: FileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = function (e: any) {
      const base64Data = e.target.result.substr(e.target.result.indexOf('base64,') + 'base64,'.length);
      cb(base64Data);
    };
  }



  loading(options: object): void {
    const defaultOpts = {
      selector: 'app-inma-root',
      action: 'show',
      nice: false
    };

    const opts = Object.assign(defaultOpts, options);

    if (opts.nice) {
      return $(opts.selector).LoadingOverlay(opts.action, {
        image: '',
        color: 'rgba(28, 35, 54, 0.45)',
        custom: `<div class="container">
                  <i class="layer"></i>
                  <i class="layer"></i>
                  <i class="layer"></i>
                </div>`
      });
    }

    return $(opts.selector).LoadingOverlay(opts.action, {
      image: '',
      custom: `<div uk-spinner></div>`
    });
  }

  notyf(action: string, msg: string): void {
    switch (action) {
      case 'success':
        //   this._notyf.confirm(msg);
        break;
      case 'failed':
        //  this._notyf.alert(msg);
        break;

      default:
        break;
    }
  }

  showToast(response: any): void {
    if (response.code === 0) {
      this.notyf(
        'success',
        'notification.success.delete'
      );
    } else {
      this.notyf(
        'failed', 'notification.customer.message.delete'
      );

    }
  }




  getRequestParams(page, pageSize, sortBy?:any): any {
    let params = {};

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    if (sortBy) {
      params[`sortBy`] = sortBy;
    }

    return params;
  }



  setDir() {
    this.changeLangDir.next(this.getCurrentLang());
  }

  getCurrentLang(): string {
    return localStorage.getItem('language');
  }




  get format(): string {
    return localStorage.getItem('format');
  }




  unsubscribeSub(sub: Subscription) {
    if (!isUndefined(sub)) {
      sub.unsubscribe();
    }
  }


  handleError(error: any): void {
    console.log('*****************ERROR*********************\n' + JSON.stringify(error) + "\n*****************************");
    if (!JSON.parse(error._body) && JSON.parse(error._body).hasOwnProperty('errorDetails')) {
      //  var msg:ErrorMessage=JSON.parse(error._body);
      console.log("Error:#:" + error);
      //  this.notyf('failed',msg.message);
    }
  }



}
