import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerMpComponent } from './supprimer-mp.component';

describe('SupprimerMpComponent', () => {
  let component: SupprimerMpComponent;
  let fixture: ComponentFixture<SupprimerMpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerMpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupprimerMpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
