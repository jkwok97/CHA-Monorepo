import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NumberInputTypeComponent } from './number-input-type.component';

describe('NumberInputTypeComponent', () => {
  let component: NumberInputTypeComponent;
  let fixture: ComponentFixture<NumberInputTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberInputTypeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NumberInputTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
