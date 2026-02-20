import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClayDesignImage } from './clay-design-image';

describe('ClayDesignImage', () => {
  let component: ClayDesignImage;
  let fixture: ComponentFixture<ClayDesignImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClayDesignImage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClayDesignImage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
