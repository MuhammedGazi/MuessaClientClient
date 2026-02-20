import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClayDesign } from './create-clay-design';

describe('CreateClayDesign', () => {
  let component: CreateClayDesign;
  let fixture: ComponentFixture<CreateClayDesign>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateClayDesign]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateClayDesign);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
