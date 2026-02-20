import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInvitationType } from './update-invitation-type';

describe('UpdateInvitationType', () => {
  let component: UpdateInvitationType;
  let fixture: ComponentFixture<UpdateInvitationType>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateInvitationType]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateInvitationType);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
