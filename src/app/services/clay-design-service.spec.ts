import { TestBed } from '@angular/core/testing';

import { ClayDesignService } from './clay-design-service';

describe('ClayDesignService', () => {
  let service: ClayDesignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClayDesignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
