import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsTableEditFormComponent } from './transactions-table-edit-form.component';

describe('TransactionsTableEditFormComponent', () => {
  let component: TransactionsTableEditFormComponent;
  let fixture: ComponentFixture<TransactionsTableEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionsTableEditFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionsTableEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
