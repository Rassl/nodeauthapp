/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetdoctorsService } from './getdoctors.service';

describe('GetdoctorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetdoctorsService]
    });
  });

  it('should ...', inject([GetdoctorsService], (service: GetdoctorsService) => {
    expect(service).toBeTruthy();
  }));
});
