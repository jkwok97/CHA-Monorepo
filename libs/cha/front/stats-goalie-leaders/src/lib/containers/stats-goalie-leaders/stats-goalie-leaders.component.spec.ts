import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsGoalieLeadersComponent } from './stats-goalie-leaders.component';

describe('StatsGoalieLeadersComponent', () => {
  let component: StatsGoalieLeadersComponent;
  let fixture: ComponentFixture<StatsGoalieLeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatsGoalieLeadersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StatsGoalieLeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
