import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsGoalieAllSidebarComponent } from './stats-goalie-all-sidebar.component';

describe('StatsGoalieAllSidebarComponent', () => {
  let component: StatsGoalieAllSidebarComponent;
  let fixture: ComponentFixture<StatsGoalieAllSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatsGoalieAllSidebarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StatsGoalieAllSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
