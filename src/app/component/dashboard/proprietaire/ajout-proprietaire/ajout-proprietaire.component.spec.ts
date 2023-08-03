import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutProprietaireComponent } from './ajout-proprietaire.component';

describe('AjoutProprietaireComponent', () => {
  let component: AjoutProprietaireComponent;
  let fixture: ComponentFixture<AjoutProprietaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutProprietaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutProprietaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
