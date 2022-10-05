import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMgmtInfoAllComponent } from './player-mgmt-info-all.component';

describe('PlayerMgmtInfoAllComponent', () => {
  let component: PlayerMgmtInfoAllComponent;
  let fixture: ComponentFixture<PlayerMgmtInfoAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerMgmtInfoAllComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerMgmtInfoAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
