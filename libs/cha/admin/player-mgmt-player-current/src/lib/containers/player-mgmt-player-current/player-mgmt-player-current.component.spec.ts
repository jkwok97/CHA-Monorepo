import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMgmtPlayerCurrentComponent } from './player-mgmt-player-current.component';

describe('PlayerMgmtPlayerCurrentComponent', () => {
  let component: PlayerMgmtPlayerCurrentComponent;
  let fixture: ComponentFixture<PlayerMgmtPlayerCurrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerMgmtPlayerCurrentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerMgmtPlayerCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
