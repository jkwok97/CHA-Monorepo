import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsTradesListBoxComponent } from './transactions-trades-list-box.component';

describe('TransactionsTradesListBoxComponent', () => {
  let component: TransactionsTradesListBoxComponent;
  let fixture: ComponentFixture<TransactionsTradesListBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionsTradesListBoxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionsTradesListBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
