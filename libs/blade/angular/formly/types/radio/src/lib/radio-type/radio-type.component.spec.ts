import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioTypeComponent } from './radio-type.component';

describe('RadioTypeComponent', () => {
  let component: RadioTypeComponent;
  let fixture: ComponentFixture<RadioTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioTypeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RadioTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
