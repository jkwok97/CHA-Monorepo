import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsTeamLeadersPkComponent } from './stats-team-leaders-pk.component';

describe('StatsTeamLeadersPkComponent', () => {
  let component: StatsTeamLeadersPkComponent;
  let fixture: ComponentFixture<StatsTeamLeadersPkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatsTeamLeadersPkComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StatsTeamLeadersPkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
