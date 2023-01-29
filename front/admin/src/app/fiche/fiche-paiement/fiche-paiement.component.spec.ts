import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichePaiementComponent } from './fiche-paiement.component';

describe('FichePaiementComponent', () => {
  let component: FichePaiementComponent;
  let fixture: ComponentFixture<FichePaiementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichePaiementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichePaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
