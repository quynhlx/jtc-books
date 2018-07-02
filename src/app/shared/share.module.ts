import { BaseInterceptor } from './services/base.interceptor';
import { BookService } from './services/book.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './services/error.interceptor';


@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [],
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [BookService, {
                provide: HTTP_INTERCEPTORS,
                useClass: BaseInterceptor,
                multi: true
            }, {
                provide: HTTP_INTERCEPTORS,
                useClass: ErrorInterceptor,
                multi: true
            }]
        };
    }
}
