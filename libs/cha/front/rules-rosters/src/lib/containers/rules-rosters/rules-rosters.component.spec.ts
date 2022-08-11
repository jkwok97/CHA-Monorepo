import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesRostersComponent } from './rules-rosters.component';

describe('RulesRostersComponent', () => {
  let component: RulesRostersComponent;
  let fixture: ComponentFixture<RulesRostersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RulesRostersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RulesRostersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
