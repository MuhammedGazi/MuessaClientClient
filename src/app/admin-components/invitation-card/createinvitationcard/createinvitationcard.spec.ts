import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Createinvitationcard } from './createinvitationcard';

describe('Createinvitationcard', () => {
  let component: Createinvitationcard;
  let fixture: ComponentFixture<Createinvitationcard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Createinvitationcard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Createinvitationcard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
