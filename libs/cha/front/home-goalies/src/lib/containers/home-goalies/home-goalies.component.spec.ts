import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGoaliesComponent } from './home-goalies.component';

describe('HomeGoaliesComponent', () => {
  let component: HomeGoaliesComponent;
  let fixture: ComponentFixture<HomeGoaliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeGoaliesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeGoaliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
