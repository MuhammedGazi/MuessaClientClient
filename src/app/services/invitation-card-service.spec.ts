import { TestBed } from '@angular/core/testing';

import { InvitationCardService } from './invitation-card-service';

describe('InvitationCardService', () => {
  let service: InvitationCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvitationCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
