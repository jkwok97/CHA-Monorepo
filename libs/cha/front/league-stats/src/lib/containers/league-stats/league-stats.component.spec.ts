import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueStatsComponent } from './league-stats.component';

describe('LeagueStatsComponent', () => {
  let component: LeagueStatsComponent;
  let fixture: ComponentFixture<LeagueStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeagueStatsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeagueStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
