import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsGmComponent } from './awards-gm.component';

describe('AwardsGmComponent', () => {
  let component: AwardsGmComponent;
  let fixture: ComponentFixture<AwardsGmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AwardsGmComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AwardsGmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
