import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMgmtGoalieCurrentTableComponent } from './player-mgmt-goalie-current-table.component';

describe('PlayerMgmtGoalieCurrentTableComponent', () => {
  let component: PlayerMgmtGoalieCurrentTableComponent;
  let fixture: ComponentFixture<PlayerMgmtGoalieCurrentTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerMgmtGoalieCurrentTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerMgmtGoalieCurrentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
