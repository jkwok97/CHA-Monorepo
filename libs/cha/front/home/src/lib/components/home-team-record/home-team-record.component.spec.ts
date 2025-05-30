import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTeamRecordComponent } from './home-team-record.component';

describe('HomeSummaryTeamRecordComponent', () => {
  let component: HomeTeamRecordComponent;
  let fixture: ComponentFixture<HomeTeamRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeTeamRecordComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeTeamRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
