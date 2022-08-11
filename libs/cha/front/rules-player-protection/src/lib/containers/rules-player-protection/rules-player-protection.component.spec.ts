import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesPlayerProtectionComponent } from './rules-player-protection.component';

describe('RulesPlayerProtectionComponent', () => {
  let component: RulesPlayerProtectionComponent;
  let fixture: ComponentFixture<RulesPlayerProtectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RulesPlayerProtectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RulesPlayerProtectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
