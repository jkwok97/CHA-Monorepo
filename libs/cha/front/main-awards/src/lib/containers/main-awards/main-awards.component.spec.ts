import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAwardsComponent } from './main-awards.component';

describe('MainAwardsComponent', () => {
  let component: MainAwardsComponent;
  let fixture: ComponentFixture<MainAwardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainAwardsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MainAwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
