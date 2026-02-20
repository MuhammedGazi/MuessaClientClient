import { TestBed } from '@angular/core/testing';

import { InvitationTypeService } from './invitation-type-service';

describe('InvitationTypeService', () => {
  let service: InvitationTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvitationTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
