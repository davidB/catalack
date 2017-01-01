import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceService } from './device.service';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppRoutingModule }     from './app-routing.module';
import { OAuthService } from 'angular2-oauth2/oauth-service';
import { AuthBtnComponent } from './auth-btn/auth-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    DeviceDetailComponent,
    DeviceListComponent,
    DashboardComponent,
    AuthBtnComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [DeviceService, OAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
