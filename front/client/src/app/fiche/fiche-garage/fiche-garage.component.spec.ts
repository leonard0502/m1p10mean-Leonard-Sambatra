import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheGarageComponent } from './fiche-garage.component';

describe('FicheGarageComponent', () => {
  let component: FicheGarageComponent;
  let fixture: ComponentFixture<FicheGarageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheGarageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheGarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
