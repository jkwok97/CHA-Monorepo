import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsSummarySalariesComponent } from './teams-summary-salaries.component';

describe('TeamsSummarySalariesComponent', () => {
  let component: TeamsSummarySalariesComponent;
  let fixture: ComponentFixture<TeamsSummarySalariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamsSummarySalariesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamsSummarySalariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
