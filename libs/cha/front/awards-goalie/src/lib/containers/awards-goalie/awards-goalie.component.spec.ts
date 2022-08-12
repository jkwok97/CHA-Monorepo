import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsGoalieComponent } from './awards-goalie.component';

describe('AwardsGoalieComponent', () => {
  let component: AwardsGoalieComponent;
  let fixture: ComponentFixture<AwardsGoalieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AwardsGoalieComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AwardsGoalieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
