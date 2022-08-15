import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTransactionsComponent } from './main-transactions.component';

describe('MainTransactionsComponent', () => {
  let component: MainTransactionsComponent;
  let fixture: ComponentFixture<MainTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainTransactionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MainTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
