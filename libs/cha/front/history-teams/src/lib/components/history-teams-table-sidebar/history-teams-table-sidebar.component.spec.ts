import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryTeamsTableSidebarComponent } from './history-teams-table-sidebar.component';

describe('HistoryTeamsTableSidebarComponent', () => {
  let component: HistoryTeamsTableSidebarComponent;
  let fixture: ComponentFixture<HistoryTeamsTableSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoryTeamsTableSidebarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HistoryTeamsTableSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
