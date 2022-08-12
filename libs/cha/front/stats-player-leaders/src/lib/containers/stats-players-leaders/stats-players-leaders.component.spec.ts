import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsPlayersLeadersComponent } from './stats-players-leaders.component';

describe('StatsPlayersLeadersComponent', () => {
  let component: StatsPlayersLeadersComponent;
  let fixture: ComponentFixture<StatsPlayersLeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatsPlayersLeadersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StatsPlayersLeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
