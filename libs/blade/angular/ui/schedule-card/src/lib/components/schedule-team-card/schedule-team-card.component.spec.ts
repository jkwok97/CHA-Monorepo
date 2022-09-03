import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleTeamCardComponent } from './schedule-team-card.component';

describe('ScheduleTeamCardComponent', () => {
  let component: ScheduleTeamCardComponent;
  let fixture: ComponentFixture<ScheduleTeamCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleTeamCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ScheduleTeamCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
