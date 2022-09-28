import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalariesTableComponent } from './salaries-table.component';

describe('SalariesTableComponent', () => {
  let component: SalariesTableComponent;
  let fixture: ComponentFixture<SalariesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalariesTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SalariesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
