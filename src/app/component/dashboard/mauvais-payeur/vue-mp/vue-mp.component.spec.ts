import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueMpComponent } from './vue-mp.component';

describe('VueMpComponent', () => {
  let component: VueMpComponent;
  let fixture: ComponentFixture<VueMpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VueMpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VueMpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
