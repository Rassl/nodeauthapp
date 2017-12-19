/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetpatientsService } from './getpatients.service';

describe('GetpatientsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetpatientsService]
    });
  });

  it('should ...', inject([GetpatientsService], (service: GetpatientsService) => {
    expect(service).toBeTruthy();
  }));
});
