import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsTableTableComponent } from './transactions-table-table.component';

describe('TransactionsTableTableComponent', () => {
  let component: TransactionsTableTableComponent;
  let fixture: ComponentFixture<TransactionsTableTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionsTableTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionsTableTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
