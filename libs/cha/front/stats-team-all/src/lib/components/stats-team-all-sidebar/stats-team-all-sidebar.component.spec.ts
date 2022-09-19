import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsTeamAllSidebarComponent } from './stats-team-all-sidebar.component';

describe('StatsTeamAllSidebarComponent', () => {
  let component: StatsTeamAllSidebarComponent;
  let fixture: ComponentFixture<StatsTeamAllSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatsTeamAllSidebarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StatsTeamAllSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
