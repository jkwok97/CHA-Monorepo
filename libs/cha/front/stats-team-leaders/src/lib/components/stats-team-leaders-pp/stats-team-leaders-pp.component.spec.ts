import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsTeamLeadersPpComponent } from './stats-team-leaders-pp.component';

describe('StatsTeamLeadersPpComponent', () => {
  let component: StatsTeamLeadersPpComponent;
  let fixture: ComponentFixture<StatsTeamLeadersPpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatsTeamLeadersPpComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StatsTeamLeadersPpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
