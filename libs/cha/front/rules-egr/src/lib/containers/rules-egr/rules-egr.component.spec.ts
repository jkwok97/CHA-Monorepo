import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesEgrComponent } from './rules-egr.component';

describe('RulesEgrComponent', () => {
  let component: RulesEgrComponent;
  let fixture: ComponentFixture<RulesEgrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RulesEgrComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RulesEgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
