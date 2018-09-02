import { ConnectionBackend, Headers, Http, Request, RequestOptions, RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';
import { tap, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpInterceptor } from '../../../../node_modules/@angular/common/http';

export class InterceptService implements HttpInterceptor {
  // intercept request and add token
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // modify request
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem('MY_TOKEN')}`
      }
    });
    return next.handle(request)
      .pipe(
        tap(event => {
          if (event instanceof HttpResponse) {
            // http response status code
            console.log(event.status);
          }
        }, error => {
          // http response status code
        }))
        .pipe(catchError((error, caught) => {
          // intercept the respons error and displace it to the console
          console.log(error);
          throw error;
        }) as any);
  }
}

