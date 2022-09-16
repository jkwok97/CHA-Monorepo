import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryPlayersTableComponent } from './history-players-table.component';

describe('HistoryPlayersTableComponent', () => {
  let component: HistoryPlayersTableComponent;
  let fixture: ComponentFixture<HistoryPlayersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoryPlayersTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HistoryPlayersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
