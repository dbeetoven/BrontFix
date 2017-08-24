import { TestBed, inject } from '@angular/core/testing';

import { FirebaseStorageServiceService } from './firebase-storage-service.service';

describe('FirebaseStorageServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebaseStorageServiceService]
    });
  });

  it('should be created', inject([FirebaseStorageServiceService], (service: FirebaseStorageServiceService) => {
    expect(service).toBeTruthy();
  }));
});
