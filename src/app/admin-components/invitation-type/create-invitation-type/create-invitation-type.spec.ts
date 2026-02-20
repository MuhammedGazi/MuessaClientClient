import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInvitationType } from './create-invitation-type';

describe('CreateInvitationType', () => {
  let component: CreateInvitationType;
  let fixture: ComponentFixture<CreateInvitationType>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateInvitationType]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateInvitationType);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
