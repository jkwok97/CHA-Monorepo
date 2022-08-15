import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMgmtInfoComponent } from './player-mgmt-info.component';

describe('PlayerMgmtInfoComponent', () => {
  let component: PlayerMgmtInfoComponent;
  let fixture: ComponentFixture<PlayerMgmtInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerMgmtInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerMgmtInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
