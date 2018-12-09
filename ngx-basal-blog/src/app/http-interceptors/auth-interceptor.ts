import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { finalize, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
/** Pass untouched request through to the next request handler. */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private auth: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        const authToken = this.auth.getAuthorizationToken();
        const authReq = req.clone({ setHeaders: { Authorization: authToken } });
        return next.handle(authReq).pipe(
            tap(v => console.log(v, authReq))
        );
    }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/