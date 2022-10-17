import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMgmtPlayerCurrentTableComponent } from './player-mgmt-player-current-table.component';

describe('PlayerMgmtPlayerCurrentTableComponent', () => {
  let component: PlayerMgmtPlayerCurrentTableComponent;
  let fixture: ComponentFixture<PlayerMgmtPlayerCurrentTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerMgmtPlayerCurrentTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerMgmtPlayerCurrentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
