import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGoaliesTableComponent } from './home-goalies-table.component';

describe('HomeGoaliesTableComponent', () => {
  let component: HomeGoaliesTableComponent;
  let fixture: ComponentFixture<HomeGoaliesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeGoaliesTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeGoaliesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
