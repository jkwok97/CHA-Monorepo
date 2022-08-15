import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsWaiversComponent } from './transactions-waivers.component';

describe('TransactionsWaiversComponent', () => {
  let component: TransactionsWaiversComponent;
  let fixture: ComponentFixture<TransactionsWaiversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionsWaiversComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionsWaiversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
