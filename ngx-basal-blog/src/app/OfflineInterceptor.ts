
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {mapTo, retryWhen, switchMap} from 'rxjs/operators';
import 'rxjs/add/observable/fromEvent';
// import { throwError } from 'rxjs/internal/observable/throwError';
// import 'rxjs/add/observable/throwError';
import 'rxjs/add/observable/throw';
@Injectable()
export class OfflineInterceptor {
    private onlineChanges$ = Observable.fromEvent(window, 'online').pipe(mapTo(true));

    get isOnline() {
        return navigator.onLine;
    }

    intercept(req, next) {
        return next.handle(req).pipe(
            retryWhen(errors => {
                if (this.isOnline) {
                    return errors.pipe(switchMap(err => Observable.throw(err)));
                }

                return this.onlineChanges$;
            })
        );
    }
}