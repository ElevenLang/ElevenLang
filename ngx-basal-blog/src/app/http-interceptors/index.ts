import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from './noop-interceptor';
import {AuthInterceptor} from './auth-interceptor';
import { EnsureHttpsInterceptor } from './ensure-https-interceptor';
import { LoggingInterceptor } from './logging-interceptor';
import { TrimNameInterceptor } from './trim-name-interceptor';
import { OfflineInterceptor } from './OfflineInterceptor';

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },

    { provide: HTTP_INTERCEPTORS, useClass: EnsureHttpsInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TrimNameInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: OfflineInterceptor, multi: true}
    // { provide: HTTP_INTERCEPTORS, useClass: UploadInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true },

];
