import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { AppModuleConstants } from './app-route.constants';

@NgModule({
  imports: [
    AppModuleConstants.MODULE_IMPORTS
  ],
  declarations: [
    AppModuleConstants.MODULE_DECLARATION
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
