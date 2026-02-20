import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClayDesignImage } from './update-clay-design-image';

describe('UpdateClayDesignImage', () => {
  let component: UpdateClayDesignImage;
  let fixture: ComponentFixture<UpdateClayDesignImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateClayDesignImage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateClayDesignImage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
