import './rxjs-extensions';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceService } from './device.service';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppRoutingModule }     from './app-routing.module';
import { OAuthService } from 'angular2-oauth2/oauth-service';
import { AccessTokenService } from './access-token.service';
import { AuthBtnComponent } from './auth-btn/auth-btn.component';
import { ApolloClientProvider, Angular2ApolloProvider } from './client.service';

import 'hammerjs';
import { DeviceTypeDetailComponent } from './device-type-detail/device-type-detail.component';
import { DeviceTypeListComponent } from './device-type-list/device-type-list.component';
import { DeviceTypeService } from './device-type.service';
import { AuthGuard } from './auth-guard';
import { ManifestViewerComponent } from './manifest-viewer/manifest-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    DeviceDetailComponent,
    DeviceListComponent,
    DashboardComponent,
    AuthBtnComponent,
    DeviceTypeDetailComponent,
    DeviceTypeListComponent,
    ManifestViewerComponent
  ],
  imports: [
    MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [
    OAuthService, ApolloClientProvider, Angular2ApolloProvider,
    AccessTokenService, AuthGuard,
    DeviceService, DeviceTypeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
