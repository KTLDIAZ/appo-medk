import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';
import { AuthenticationModule } from './components/authentication/authentication.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRouterModule, AuthenticationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
