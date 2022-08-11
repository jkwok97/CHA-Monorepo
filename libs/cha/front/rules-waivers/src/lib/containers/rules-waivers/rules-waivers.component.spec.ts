import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesWaiversComponent } from './rules-waivers.component';

describe('RulesWaiversComponent', () => {
  let component: RulesWaiversComponent;
  let fixture: ComponentFixture<RulesWaiversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RulesWaiversComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RulesWaiversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
