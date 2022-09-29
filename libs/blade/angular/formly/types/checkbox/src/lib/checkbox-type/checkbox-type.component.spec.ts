import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxTypeComponent } from './checkbox-type.component';

describe('CheckboxTypeComponent', () => {
  let component: CheckboxTypeComponent;
  let fixture: ComponentFixture<CheckboxTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxTypeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CheckboxTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
