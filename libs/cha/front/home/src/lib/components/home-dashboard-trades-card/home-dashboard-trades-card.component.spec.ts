import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDashboardTradesCardComponent } from './home-dashboard-trades-card.component';

describe('LeagueTradesTeamCardComponent', () => {
  let component: HomeDashboardTradesCardComponent;
  let fixture: ComponentFixture<HomeDashboardTradesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeDashboardTradesCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeDashboardTradesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
