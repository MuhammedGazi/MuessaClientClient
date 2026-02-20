import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationType } from './invitation-type';

describe('InvitationType', () => {
  let component: InvitationType;
  let fixture: ComponentFixture<InvitationType>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvitationType]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvitationType);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
