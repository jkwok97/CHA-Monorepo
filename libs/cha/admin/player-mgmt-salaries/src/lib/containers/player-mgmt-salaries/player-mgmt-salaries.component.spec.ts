import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMgmtSalariesComponent } from './player-mgmt-salaries.component';

describe('PlayerMgmtSalariesComponent', () => {
  let component: PlayerMgmtSalariesComponent;
  let fixture: ComponentFixture<PlayerMgmtSalariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerMgmtSalariesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerMgmtSalariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
