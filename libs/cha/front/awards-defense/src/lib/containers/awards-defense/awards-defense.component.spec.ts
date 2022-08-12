import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsDefenseComponent } from './awards-defense.component';

describe('AwardsDefenseComponent', () => {
  let component: AwardsDefenseComponent;
  let fixture: ComponentFixture<AwardsDefenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AwardsDefenseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AwardsDefenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
