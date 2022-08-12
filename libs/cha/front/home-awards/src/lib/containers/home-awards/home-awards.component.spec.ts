import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAwardsComponent } from './home-awards.component';

describe('HomeAwardsComponent', () => {
  let component: HomeAwardsComponent;
  let fixture: ComponentFixture<HomeAwardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeAwardsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeAwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
