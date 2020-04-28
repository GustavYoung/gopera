import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepdirariosComponent } from './repdirarios.component';

describe('RepdirariosComponent', () => {
  let component: RepdirariosComponent;
  let fixture: ComponentFixture<RepdirariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepdirariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepdirariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
