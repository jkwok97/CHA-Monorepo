import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueDivisionsComponent } from './league-divisions.component';

describe('LeagueDivisionsComponent', () => {
  let component: LeagueDivisionsComponent;
  let fixture: ComponentFixture<LeagueDivisionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeagueDivisionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeagueDivisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
