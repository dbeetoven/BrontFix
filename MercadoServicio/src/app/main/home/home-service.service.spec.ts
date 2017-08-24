import { TestBed, inject } from '@angular/core/testing';

import { HomeServiceService } from './home-service.service';

describe('HomeServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeServiceService]
    });
  });

  it('should be created', inject([HomeServiceService], (service: HomeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
