import { Routes, RouterModule } from '../../node_modules/@angular/router';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module';
import { HttpClientModule } from '@angular/common/http';

import { InMemoryUserService } from 'src/app/static-data-service/in-memory.service';
import { HttpClientInMemoryWebApiModule } from '../../node_modules/angular-in-memory-web-api';




export class AppModuleConstants {
  static MODULE_IMPORTS = [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryUserService, { delay: 1500 , dataEncapsulation: false }
    )
  ];

  static MODULE_DECLARATION = [
    AppComponent
  ];
}
