import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTeamCapComponent } from './home-team-cap.component';

describe('HomeSummaryTeamCapComponent', () => {
  let component: HomeTeamCapComponent;
  let fixture: ComponentFixture<HomeTeamCapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeTeamCapComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeTeamCapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
