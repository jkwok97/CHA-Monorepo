import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsStatsTableSiderComponent } from './teams-stats-table-sider.component';

describe('TeamsStatsTableSiderComponent', () => {
  let component: TeamsStatsTableSiderComponent;
  let fixture: ComponentFixture<TeamsStatsTableSiderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamsStatsTableSiderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamsStatsTableSiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
