import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updateinvitationcard } from './updateinvitationcard';

describe('Updateinvitationcard', () => {
  let component: Updateinvitationcard;
  let fixture: ComponentFixture<Updateinvitationcard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Updateinvitationcard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updateinvitationcard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
