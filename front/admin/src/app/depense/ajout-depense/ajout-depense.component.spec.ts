import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutDepenseComponent } from './ajout-depense.component';

describe('AjoutDepenseComponent', () => {
  let component: AjoutDepenseComponent;
  let fixture: ComponentFixture<AjoutDepenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutDepenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutDepenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
