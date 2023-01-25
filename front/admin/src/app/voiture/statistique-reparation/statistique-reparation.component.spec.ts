import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiqueReparationComponent } from './statistique-reparation.component';

describe('StatistiqueReparationComponent', () => {
  let component: StatistiqueReparationComponent;
  let fixture: ComponentFixture<StatistiqueReparationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatistiqueReparationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistiqueReparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
