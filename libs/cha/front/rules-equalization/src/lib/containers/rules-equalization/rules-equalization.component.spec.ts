import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesEqualizationComponent } from './rules-equalization.component';

describe('RulesEqualizationComponent', () => {
  let component: RulesEqualizationComponent;
  let fixture: ComponentFixture<RulesEqualizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RulesEqualizationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RulesEqualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
