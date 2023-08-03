import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MauvaisPayeurComponent } from './mauvais-payeur.component';

describe('MauvaisPayeurComponent', () => {
  let component: MauvaisPayeurComponent;
  let fixture: ComponentFixture<MauvaisPayeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MauvaisPayeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MauvaisPayeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
