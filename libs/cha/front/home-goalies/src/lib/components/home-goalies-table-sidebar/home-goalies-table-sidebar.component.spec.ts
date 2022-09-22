import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGoaliesTableSidebarComponent } from './home-goalies-table-sidebar.component';

describe('HomeGoaliesTableSidebarComponent', () => {
  let component: HomeGoaliesTableSidebarComponent;
  let fixture: ComponentFixture<HomeGoaliesTableSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeGoaliesTableSidebarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeGoaliesTableSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
