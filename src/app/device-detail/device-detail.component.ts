import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Device } from '../device';
import { DeviceService } from '../device.service';

import 'rxjs/add/operator/switchMap';

@Component({
  //moduleId: module.id,
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css']
})
export class DeviceDetailComponent implements OnInit {
  @Input()
  device: Device;

  constructor(
    private deviceService: DeviceService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => this.deviceService.findDevice(params['id']))
    .subscribe(v => this.device = v);
  }

  goBack(): void {
    this.location.back();
  }
}
