import { TestBed, inject } from '@angular/core/testing';

import { AuthentificationServiceService } from './authentification-service.service';

describe('AuthentificationServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthentificationServiceService]
    });
  });

  it('should be created', inject([AuthentificationServiceService], (service: AuthentificationServiceService) => {
    expect(service).toBeTruthy();
  }));
});
