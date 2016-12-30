import { Component, OnInit } from '@angular/core';

import { Device }  from '../device';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {
  selectedDevice: Device;
  devices: Device[];

  constructor(private deviceService: DeviceService) { }

  ngOnInit() {
    this.deviceService.findDevices().then(v => this.devices = v);
  }

  onSelect(device: Device) {
    this.selectedDevice = device;
  }

}
