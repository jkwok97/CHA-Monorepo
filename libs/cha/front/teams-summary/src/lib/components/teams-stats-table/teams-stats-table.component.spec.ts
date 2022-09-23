import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsStatsTableComponent } from './teams-stats-table.component';

describe('TeamsStatsTableComponent', () => {
  let component: TeamsStatsTableComponent;
  let fixture: ComponentFixture<TeamsStatsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamsStatsTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamsStatsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
