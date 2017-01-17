/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AccessTokenService } from './access-token.service';

describe('AccessTokenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccessTokenService]
    });
  });

  it('should ...', inject([AccessTokenService], (service: AccessTokenService) => {
    expect(service).toBeTruthy();
  }));
});
