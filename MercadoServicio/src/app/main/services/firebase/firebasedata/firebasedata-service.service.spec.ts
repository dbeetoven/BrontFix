import { TestBed, inject } from '@angular/core/testing';

import { FirebasedataServiceService } from './firebasedata-service.service';

describe('FirebasedataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebasedataServiceService]
    });
  });

  it('should be created', inject([FirebasedataServiceService], (service: FirebasedataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
