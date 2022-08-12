import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsTeamAllComponent } from './stats-team-all.component';

describe('StatsTeamAllComponent', () => {
  let component: StatsTeamAllComponent;
  let fixture: ComponentFixture<StatsTeamAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatsTeamAllComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StatsTeamAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
