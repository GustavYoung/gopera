import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperativoDetailComponent } from './operativo-detail.component';

describe('OperativoDetailComponent', () => {
  let component: OperativoDetailComponent;
  let fixture: ComponentFixture<OperativoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperativoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperativoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
