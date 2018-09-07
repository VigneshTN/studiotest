import { NgModule, ErrorHandler } from '@angular/core';
import { AppComponent } from './app.component';
import { AppModuleConstants } from './app-module.constants';

@NgModule({
  imports: [AppModuleConstants.MODULE_IMPORTS],
  declarations: [AppModuleConstants.MODULE_DECLARATION],
  providers: [AppModuleConstants.MODULE_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
