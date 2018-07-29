import { TestBed, inject } from '@angular/core/testing';

import { ErrorhandlerServiceService } from './errorhandler-service.service';

describe('ErrorhandlerServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorhandlerServiceService]
    });
  });

  it('should be created', inject([ErrorhandlerServiceService], (service: ErrorhandlerServiceService) => {
    expect(service).toBeTruthy();
  }));
});
