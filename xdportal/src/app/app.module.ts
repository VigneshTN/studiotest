import { NgModule, ErrorHandler } from '@angular/core';
import { AppComponent } from './app.component';
import { AppModuleConstants } from './app-route.constants';
import { RouterModule } from '@angular/router';
import { InterceptService } from './shared/utils/http-interceptor';
import { HTTP_INTERCEPTORS } from '../../node_modules/@angular/common/http';
import { GlobalErrorHandlerService } from './shared/utils/global-error-handler';

@NgModule({
  imports: [
    AppModuleConstants.MODULE_IMPORTS
  ],
  declarations: [
    AppModuleConstants.MODULE_DECLARATION
  ],
  providers: [InterceptService,
    {
      provide: HTTP_INTERCEPTORS, useClass: InterceptService, multi: true
    },
    GlobalErrorHandlerService,
    {
       provide: ErrorHandler, useClass: GlobalErrorHandlerService
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
