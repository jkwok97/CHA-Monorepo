import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputTypeComponent } from './text-input-type.component';

describe('TextInputTypeComponent', () => {
  let component: TextInputTypeComponent;
  let fixture: ComponentFixture<TextInputTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextInputTypeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TextInputTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
