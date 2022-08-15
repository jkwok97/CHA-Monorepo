import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMgmtGoalieCurrentComponent } from './player-mgmt-goalie-current.component';

describe('PlayerMgmtGoalieCurrentComponent', () => {
  let component: PlayerMgmtGoalieCurrentComponent;
  let fixture: ComponentFixture<PlayerMgmtGoalieCurrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerMgmtGoalieCurrentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerMgmtGoalieCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
