import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRulesComponent } from './main-rules.component';

describe('MainRulesComponent', () => {
  let component: MainRulesComponent;
  let fixture: ComponentFixture<MainRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainRulesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MainRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
