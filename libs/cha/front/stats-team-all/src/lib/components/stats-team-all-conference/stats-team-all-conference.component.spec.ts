import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsTeamAllConferenceComponent } from './stats-team-all-conference.component';

describe('StatsTeamAllConferenceComponent', () => {
  let component: StatsTeamAllConferenceComponent;
  let fixture: ComponentFixture<StatsTeamAllConferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatsTeamAllConferenceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StatsTeamAllConferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
