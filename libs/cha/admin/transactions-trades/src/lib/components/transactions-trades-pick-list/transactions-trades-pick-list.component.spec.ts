import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsTradesPickListComponent } from './transactions-trades-pick-list.component';

describe('TransactionsTradesPickListComponent', () => {
  let component: TransactionsTradesPickListComponent;
  let fixture: ComponentFixture<TransactionsTradesPickListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionsTradesPickListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionsTradesPickListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
