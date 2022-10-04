import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMgmtInfoTableComponent } from './player-mgmt-info-table.component';

describe('PlayerMgmtInfoTableComponent', () => {
  let component: PlayerMgmtInfoTableComponent;
  let fixture: ComponentFixture<PlayerMgmtInfoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerMgmtInfoTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerMgmtInfoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
