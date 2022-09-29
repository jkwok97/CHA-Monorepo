import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueUsersEditFormComponent } from './league-users-edit-form.component';

describe('LeagueUsersEditFormComponent', () => {
  let component: LeagueUsersEditFormComponent;
  let fixture: ComponentFixture<LeagueUsersEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeagueUsersEditFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeagueUsersEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
