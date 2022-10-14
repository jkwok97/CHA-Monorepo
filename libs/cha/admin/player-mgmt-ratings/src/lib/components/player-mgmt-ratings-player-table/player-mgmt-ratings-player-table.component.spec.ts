import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMgmtRatingsPlayerTableComponent } from './player-mgmt-ratings-player-table.component';

describe('PlayerMgmtRatingsPlayerTableComponent', () => {
  let component: PlayerMgmtRatingsPlayerTableComponent;
  let fixture: ComponentFixture<PlayerMgmtRatingsPlayerTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerMgmtRatingsPlayerTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerMgmtRatingsPlayerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
