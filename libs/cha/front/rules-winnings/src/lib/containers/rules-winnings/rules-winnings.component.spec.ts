import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesWinningsComponent } from './rules-winnings.component';

describe('RulesWinningsComponent', () => {
  let component: RulesWinningsComponent;
  let fixture: ComponentFixture<RulesWinningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RulesWinningsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RulesWinningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
