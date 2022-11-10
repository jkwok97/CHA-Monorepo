import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueDivisionsTableComponent } from './league-divisions-table.component';

describe('LeagueDivisionsTableComponent', () => {
  let component: LeagueDivisionsTableComponent;
  let fixture: ComponentFixture<LeagueDivisionsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeagueDivisionsTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeagueDivisionsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
