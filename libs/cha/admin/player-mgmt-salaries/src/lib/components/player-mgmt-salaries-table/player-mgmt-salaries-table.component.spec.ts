import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMgmtSalariesTableComponent } from './player-mgmt-salaries-table.component';

describe('PlayerMgmtSalariesTableComponent', () => {
  let component: PlayerMgmtSalariesTableComponent;
  let fixture: ComponentFixture<PlayerMgmtSalariesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerMgmtSalariesTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerMgmtSalariesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
