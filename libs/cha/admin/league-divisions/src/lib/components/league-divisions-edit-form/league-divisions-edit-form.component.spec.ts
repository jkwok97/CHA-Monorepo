import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueDivisionsEditFormComponent } from './league-divisions-edit-form.component';

describe('LeagueDivisionsEditFormComponent', () => {
  let component: LeagueDivisionsEditFormComponent;
  let fixture: ComponentFixture<LeagueDivisionsEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeagueDivisionsEditFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeagueDivisionsEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
