import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueConferencesEditFormComponent } from './league-conferences-edit-form.component';

describe('LeagueConferencesEditFormComponent', () => {
  let component: LeagueConferencesEditFormComponent;
  let fixture: ComponentFixture<LeagueConferencesEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeagueConferencesEditFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeagueConferencesEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
