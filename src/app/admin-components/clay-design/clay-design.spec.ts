import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClayDesign } from './clay-design';

describe('ClayDesign', () => {
  let component: ClayDesign;
  let fixture: ComponentFixture<ClayDesign>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClayDesign]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClayDesign);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
