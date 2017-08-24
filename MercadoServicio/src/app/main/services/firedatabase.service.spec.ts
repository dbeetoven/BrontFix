/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FiredatabaseService } from './firedatabase.service';

describe('FiredatabaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FiredatabaseService]
    });
  });

  it('should ...', inject([FiredatabaseService], (service: FiredatabaseService) => {
    expect(service).toBeTruthy();
  }));
});
