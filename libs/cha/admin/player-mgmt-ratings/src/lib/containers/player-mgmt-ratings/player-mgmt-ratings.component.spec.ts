import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMgmtRatingsComponent } from './player-mgmt-ratings.component';

describe('PlayerMgmtRatingsComponent', () => {
  let component: PlayerMgmtRatingsComponent;
  let fixture: ComponentFixture<PlayerMgmtRatingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerMgmtRatingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerMgmtRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
