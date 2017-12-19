/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CreatesheduleService } from './createshedule.service';

describe('CreatesheduleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreatesheduleService]
    });
  });

  it('should ...', inject([CreatesheduleService], (service: CreatesheduleService) => {
    expect(service).toBeTruthy();
  }));
});
