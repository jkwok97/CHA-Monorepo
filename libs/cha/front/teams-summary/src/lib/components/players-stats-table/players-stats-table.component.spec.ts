import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersStatsTableComponent } from './players-stats-table.component';

describe('PlayersStatsTableComponent', () => {
  let component: PlayersStatsTableComponent;
  let fixture: ComponentFixture<PlayersStatsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayersStatsTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayersStatsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
