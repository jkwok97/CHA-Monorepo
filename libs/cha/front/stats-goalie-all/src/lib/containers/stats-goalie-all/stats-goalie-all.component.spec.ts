import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsGoalieAllComponent } from './stats-goalie-all.component';

describe('StatsGoalieAllComponent', () => {
  let component: StatsGoalieAllComponent;
  let fixture: ComponentFixture<StatsGoalieAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatsGoalieAllComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StatsGoalieAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
