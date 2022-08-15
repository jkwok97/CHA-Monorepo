import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsTradesComponent } from './transactions-trades.component';

describe('TransactionsTradesComponent', () => {
  let component: TransactionsTradesComponent;
  let fixture: ComponentFixture<TransactionsTradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionsTradesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionsTradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
