import { Injectable } from '@angular/core';

import { Device } from './device';
import { DEVICES } from './mock-devices';

@Injectable()
export class DeviceService {

  constructor() { }

  findDevices(): Promise<Device[]> {
    return Promise.resolve(DEVICES);
  }
  findDevice(id: string): Promise<Device> {
    return this.findDevices()
               .then(l => l.find(v => v.id === id));
  }
}
