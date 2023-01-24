import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutReparationComponent } from './ajout-reparation.component';

describe('AjoutReparationComponent', () => {
  let component: AjoutReparationComponent;
  let fixture: ComponentFixture<AjoutReparationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutReparationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutReparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
