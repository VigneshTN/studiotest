import { Routes, RouterModule } from '../../node_modules/@angular/router';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module';

export class AppModuleConstants {
  static MODULE_IMPORTS = [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule
  ];

  static MODULE_DECLARATION = [
    AppComponent
  ];
}
