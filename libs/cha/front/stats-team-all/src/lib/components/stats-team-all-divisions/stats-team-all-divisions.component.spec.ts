import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsTeamAllDivisionsComponent } from './stats-team-all-divisions.component';

describe('StatsTeamAllDivisionsComponent', () => {
  let component: StatsTeamAllDivisionsComponent;
  let fixture: ComponentFixture<StatsTeamAllDivisionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatsTeamAllDivisionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StatsTeamAllDivisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
