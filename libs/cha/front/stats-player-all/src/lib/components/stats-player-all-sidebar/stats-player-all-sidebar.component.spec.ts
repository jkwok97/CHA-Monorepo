import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsPlayerAllSidebarComponent } from './stats-player-all-sidebar.component';

describe('StatsPlayerAllSidebarComponent', () => {
  let component: StatsPlayerAllSidebarComponent;
  let fixture: ComponentFixture<StatsPlayerAllSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatsPlayerAllSidebarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StatsPlayerAllSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
