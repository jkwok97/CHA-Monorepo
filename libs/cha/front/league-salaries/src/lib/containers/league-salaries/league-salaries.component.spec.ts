import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueSalariesComponent } from './league-salaries.component';

describe('LeagueSalariesComponent', () => {
  let component: LeagueSalariesComponent;
  let fixture: ComponentFixture<LeagueSalariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeagueSalariesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeagueSalariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
