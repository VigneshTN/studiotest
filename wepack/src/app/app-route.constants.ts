import { Routes } from "../../node_modules/@angular/router";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

export class AppModuleConstants {
  static MODULE_IMPORTS = [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule
  ];

  static MODULE_DECLARATION = [
    AppComponent
  ];
}
