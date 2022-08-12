import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryPlayersComponent } from './history-players.component';

describe('HistoryPlayersComponent', () => {
  let component: HistoryPlayersComponent;
  let fixture: ComponentFixture<HistoryPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoryPlayersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HistoryPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
