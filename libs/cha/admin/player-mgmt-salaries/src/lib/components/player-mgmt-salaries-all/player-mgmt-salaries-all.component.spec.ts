import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMgmtSalariesAllComponent } from './player-mgmt-salaries-all.component';

describe('PlayerMgmtSalariesAllComponent', () => {
  let component: PlayerMgmtSalariesAllComponent;
  let fixture: ComponentFixture<PlayerMgmtSalariesAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerMgmtSalariesAllComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerMgmtSalariesAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
