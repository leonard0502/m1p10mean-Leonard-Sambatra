import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFicheComponent } from './liste-fiche.component';

describe('ListeFicheComponent', () => {
  let component: ListeFicheComponent;
  let fixture: ComponentFixture<ListeFicheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeFicheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeFicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
