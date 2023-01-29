import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheDetailsComponent } from './fiche-details.component';

describe('FicheDetailsComponent', () => {
  let component: FicheDetailsComponent;
  let fixture: ComponentFixture<FicheDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
