import { TestBed } from '@angular/core/testing';

import { ClayDesingImageService } from './clay-desing-image-service';

describe('ClayDesingImageService', () => {
  let service: ClayDesingImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClayDesingImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
