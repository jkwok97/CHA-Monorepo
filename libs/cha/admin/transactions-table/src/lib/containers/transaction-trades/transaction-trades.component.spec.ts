import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionTradesComponent } from './transaction-trades.component';

describe('TransactionTradesComponent', () => {
  let component: TransactionTradesComponent;
  let fixture: ComponentFixture<TransactionTradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionTradesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionTradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
