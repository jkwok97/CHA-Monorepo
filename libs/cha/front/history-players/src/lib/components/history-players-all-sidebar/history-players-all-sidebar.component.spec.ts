import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryPlayersAllSidebarComponent } from './history-players-all-sidebar.component';

describe('HistoryPlayersAllSidebarComponent', () => {
  let component: HistoryPlayersAllSidebarComponent;
  let fixture: ComponentFixture<HistoryPlayersAllSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoryPlayersAllSidebarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HistoryPlayersAllSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
