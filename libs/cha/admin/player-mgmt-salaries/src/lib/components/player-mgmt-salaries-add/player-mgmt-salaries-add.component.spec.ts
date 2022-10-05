import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMgmtSalariesAddComponent } from './player-mgmt-salaries-add.component';

describe('PlayerMgmtSalariesAddComponent', () => {
  let component: PlayerMgmtSalariesAddComponent;
  let fixture: ComponentFixture<PlayerMgmtSalariesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerMgmtSalariesAddComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerMgmtSalariesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
