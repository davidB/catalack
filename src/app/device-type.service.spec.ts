/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DeviceTypeService } from './device-type.service';

describe('DeviceTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeviceTypeService]
    });
  });

  it('should ...', inject([DeviceTypeService], (service: DeviceTypeService) => {
    expect(service).toBeTruthy();
  }));
});
