import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueTeamsEditFormComponent } from './league-teams-edit-form.component';

describe('LeagueTeamsEditFormComponent', () => {
  let component: LeagueTeamsEditFormComponent;
  let fixture: ComponentFixture<LeagueTeamsEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeagueTeamsEditFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeagueTeamsEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
