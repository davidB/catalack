import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { DeviceType } from '../device-type';
import { DeviceTypeService } from '../device-type.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';

@Component({
  //moduleId: module.id,
  selector: 'app-device-type-detail',
  templateUrl: './device-type-detail.component.html',
  styleUrls: ['./device-type-detail.component.css']
})
export class DeviceTypeDetailComponent implements OnInit {
  //deviceType: Observable<DeviceType>;
  deviceType: DeviceType;

  constructor(
    private deviceTypeService: DeviceTypeService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    //this.deviceType = this.route.params
    this.route.params
    .switchMap((params: Params) => this.deviceTypeService.findDeviceType(params['id']))
    .do(v => console.log("dt", v))
    .subscribe(v => this.deviceType = v);
  }

  asDate(ts: number) {
    console.log("ts", ts)
    new Date(ts).toISOString()
  }

  goBack(): void {
    this.location.back();
  }
}
