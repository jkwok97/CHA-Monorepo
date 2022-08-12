import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhlLeadersComponent } from './nhl-leaders.component';

describe('NhlLeadersComponent', () => {
  let component: NhlLeadersComponent;
  let fixture: ComponentFixture<NhlLeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NhlLeadersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NhlLeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
