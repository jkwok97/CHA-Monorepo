import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsRookieComponent } from './awards-rookie.component';

describe('AwardsRookieComponent', () => {
  let component: AwardsRookieComponent;
  let fixture: ComponentFixture<AwardsRookieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AwardsRookieComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AwardsRookieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
