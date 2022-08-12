import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsScorerComponent } from './awards-scorer.component';

describe('AwardsScorerComponent', () => {
  let component: AwardsScorerComponent;
  let fixture: ComponentFixture<AwardsScorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AwardsScorerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AwardsScorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
