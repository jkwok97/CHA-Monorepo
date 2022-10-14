import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMgmtRatingsGoalieTableComponent } from './player-mgmt-ratings-goalie-table.component';

describe('PlayerMgmtRatingsGoalieTableComponent', () => {
  let component: PlayerMgmtRatingsGoalieTableComponent;
  let fixture: ComponentFixture<PlayerMgmtRatingsGoalieTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerMgmtRatingsGoalieTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerMgmtRatingsGoalieTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
