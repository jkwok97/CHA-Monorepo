import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueConferencesComponent } from './league-conferences.component';

describe('LeagueConferencesComponent', () => {
  let component: LeagueConferencesComponent;
  let fixture: ComponentFixture<LeagueConferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeagueConferencesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeagueConferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
