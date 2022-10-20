import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionTradesButtonsComponent } from './transaction-trades-buttons.component';

describe('TransactionTradesButtonsComponent', () => {
  let component: TransactionTradesButtonsComponent;
  let fixture: ComponentFixture<TransactionTradesButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionTradesButtonsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionTradesButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
