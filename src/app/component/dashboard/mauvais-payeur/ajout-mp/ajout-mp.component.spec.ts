import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutMpComponent } from './ajout-mp.component';

describe('AjoutMpComponent', () => {
  let component: AjoutMpComponent;
  let fixture: ComponentFixture<AjoutMpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutMpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutMpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
