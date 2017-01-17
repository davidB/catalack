import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceTypeDetailComponent } from './device-type-detail/device-type-detail.component';
import { DeviceTypeListComponent } from './device-type-list/device-type-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth-guard';

const routes: Routes = [
  { path: '', redirectTo: '/deviceTypes', pathMatch: 'full' },
  { path: "dashboard", component: DashboardComponent },
  { path: "devices", component: DeviceListComponent, canActivate: [AuthGuard]},
  { path: "device/:id", component: DeviceDetailComponent, canActivate: [AuthGuard] },
  { path: "deviceTypes", component: DeviceTypeListComponent },
  { path: "deviceType/:id", component: DeviceTypeDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
