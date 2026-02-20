import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClayDesign } from './update-clay-design';

describe('UpdateClayDesign', () => {
  let component: UpdateClayDesign;
  let fixture: ComponentFixture<UpdateClayDesign>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateClayDesign]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateClayDesign);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
