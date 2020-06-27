import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelControllerComponent } from './parcel-controller.component';

describe('ParcelControllerComponent', () => {
  let component: ParcelControllerComponent;
  let fixture: ComponentFixture<ParcelControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcelControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcelControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
