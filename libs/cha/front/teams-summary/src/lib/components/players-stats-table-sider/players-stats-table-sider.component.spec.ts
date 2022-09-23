import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersStatsTableSiderComponent } from './players-stats-table-sider.component';

describe('PlayersStatsTableSiderComponent', () => {
  let component: PlayersStatsTableSiderComponent;
  let fixture: ComponentFixture<PlayersStatsTableSiderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayersStatsTableSiderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayersStatsTableSiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
