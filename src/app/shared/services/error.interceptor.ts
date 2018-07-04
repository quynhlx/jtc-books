import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private toastr: ToastrService) {
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(map(event => {
            if (event instanceof HttpResponse) {
                console.log(event);
                // if (event.status === 200) {
                //     this.toastr.success('Successfully', 'Get Data');
                // }
            }
            return event;
        }));
    }
}
