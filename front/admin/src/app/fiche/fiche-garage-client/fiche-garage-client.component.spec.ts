import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheGarageClientComponent } from './fiche-garage-client.component';

describe('FicheGarageClientComponent', () => {
  let component: FicheGarageClientComponent;
  let fixture: ComponentFixture<FicheGarageClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheGarageClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheGarageClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
