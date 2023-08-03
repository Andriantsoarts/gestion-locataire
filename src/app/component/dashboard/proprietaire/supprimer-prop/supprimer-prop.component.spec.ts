import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerPropComponent } from './supprimer-prop.component';

describe('SupprimerPropComponent', () => {
  let component: SupprimerPropComponent;
  let fixture: ComponentFixture<SupprimerPropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerPropComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupprimerPropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
