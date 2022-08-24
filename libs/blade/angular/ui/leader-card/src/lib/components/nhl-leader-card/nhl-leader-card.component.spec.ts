import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhlLeaderCardComponent } from './nhl-leader-card.component';

describe('NhlLeaderCardComponent', () => {
  let component: NhlLeaderCardComponent;
  let fixture: ComponentFixture<NhlLeaderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NhlLeaderCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NhlLeaderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
