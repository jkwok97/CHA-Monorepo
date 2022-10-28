import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsTableEditComponent } from './transactions-table-edit.component';

describe('TransactionsTableEditComponent', () => {
  let component: TransactionsTableEditComponent;
  let fixture: ComponentFixture<TransactionsTableEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionsTableEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionsTableEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
