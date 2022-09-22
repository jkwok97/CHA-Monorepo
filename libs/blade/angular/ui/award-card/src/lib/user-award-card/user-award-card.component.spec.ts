import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAwardCardComponent } from './user-award-card.component';

describe('UserAwardCardComponent', () => {
  let component: UserAwardCardComponent;
  let fixture: ComponentFixture<UserAwardCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAwardCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserAwardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
