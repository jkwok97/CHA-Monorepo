import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMgmtInfoAddComponent } from './player-mgmt-info-add.component';

describe('PlayerMgmtInfoAddComponent', () => {
  let component: PlayerMgmtInfoAddComponent;
  let fixture: ComponentFixture<PlayerMgmtInfoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerMgmtInfoAddComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerMgmtInfoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
