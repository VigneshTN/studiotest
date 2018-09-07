import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { InMemoryUserService } from './static-data-service/in-memory.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InterceptService } from './shared/utils/http-interceptor';
import { GlobalErrorHandlerService } from './shared/utils/global-error-handler';
import { ErrorHandler } from '../../node_modules/@angular/core';


export class AppModuleConstants {
  static MODULE_IMPORTS = [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryUserService, { delay: 500 , dataEncapsulation: false }
    )
  ];

  static MODULE_PROVIDERS = [ InterceptService,
        {
          provide: HTTP_INTERCEPTORS, useClass: InterceptService, multi: true
        },
        GlobalErrorHandlerService,
        {
          provide: ErrorHandler, useClass: GlobalErrorHandlerService
        }
  ];

  static MODULE_DECLARATION = [
    AppComponent
  ];
}

