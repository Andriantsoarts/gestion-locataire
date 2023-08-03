import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VuePropComponent } from './vue-prop.component';

describe('VuePropComponent', () => {
  let component: VuePropComponent;
  let fixture: ComponentFixture<VuePropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VuePropComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VuePropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
