import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsWaiversOrderListComponent } from './transactions-waivers-order-list.component';

describe('TransactionsWaiversOrderListComponent', () => {
  let component: TransactionsWaiversOrderListComponent;
  let fixture: ComponentFixture<TransactionsWaiversOrderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionsWaiversOrderListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionsWaiversOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
