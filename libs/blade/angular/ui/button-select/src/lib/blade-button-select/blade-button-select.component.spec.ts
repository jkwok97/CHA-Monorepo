import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BladeButtonSelectComponent } from './blade-button-select.component';

describe('BladeButtonSelectComponent', () => {
  let component: BladeButtonSelectComponent;
  let fixture: ComponentFixture<BladeButtonSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BladeButtonSelectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BladeButtonSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
