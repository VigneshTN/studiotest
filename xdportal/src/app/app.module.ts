import { NgModule, ErrorHandler } from '@angular/core';
import { AppComponent } from './app.component';
import { AppModuleConstants } from './app-route.constants';
import { RouterModule } from '@angular/router';

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
