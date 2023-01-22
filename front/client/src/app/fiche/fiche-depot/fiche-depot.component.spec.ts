import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheDepotComponent } from './fiche-depot.component';

describe('FicheDepotComponent', () => {
  let component: FicheDepotComponent;
  let fixture: ComponentFixture<FicheDepotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheDepotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheDepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
