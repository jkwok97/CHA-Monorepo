import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSummarySalariesComponent } from './home-summary-salaries.component';

describe('HomeSummarySalariesComponent', () => {
  let component: HomeSummarySalariesComponent;
  let fixture: ComponentFixture<HomeSummarySalariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeSummarySalariesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeSummarySalariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
