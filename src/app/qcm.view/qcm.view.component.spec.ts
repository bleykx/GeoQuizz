import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Qcm.ViewComponent } from './qcm.view.component';

describe('Qcm.ViewComponent', () => {
  let component: Qcm.ViewComponent;
  let fixture: ComponentFixture<Qcm.ViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Qcm.ViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Qcm.ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
