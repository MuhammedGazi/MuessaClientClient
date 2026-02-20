import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClayDesignImage } from './create-clay-design-image';

describe('CreateClayDesignImage', () => {
  let component: CreateClayDesignImage;
  let fixture: ComponentFixture<CreateClayDesignImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateClayDesignImage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateClayDesignImage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
