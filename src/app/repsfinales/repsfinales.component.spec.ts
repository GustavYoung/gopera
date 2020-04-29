import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepsfinalesComponent } from './repsfinales.component';

describe('RepsfinalesComponent', () => {
  let component: RepsfinalesComponent;
  let fixture: ComponentFixture<RepsfinalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepsfinalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepsfinalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
