import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueDivisionsEditComponent } from './league-divisions-edit.component';

describe('LeagueDivisionsEditComponent', () => {
  let component: LeagueDivisionsEditComponent;
  let fixture: ComponentFixture<LeagueDivisionsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeagueDivisionsEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeagueDivisionsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
