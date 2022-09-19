import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryGoalieSidebarComponent } from './history-goalie-sidebar.component';

describe('HistoryGoalieSidebarComponent', () => {
  let component: HistoryGoalieSidebarComponent;
  let fixture: ComponentFixture<HistoryGoalieSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoryGoalieSidebarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HistoryGoalieSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
