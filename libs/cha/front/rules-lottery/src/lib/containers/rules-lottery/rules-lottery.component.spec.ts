import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesLotteryComponent } from './rules-lottery.component';

describe('RulesLotteryComponent', () => {
  let component: RulesLotteryComponent;
  let fixture: ComponentFixture<RulesLotteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RulesLotteryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RulesLotteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
