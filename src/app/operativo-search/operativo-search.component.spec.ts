import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperativoSearchComponent } from './operativo-search.component';

describe('OperativoSearchComponent', () => {
  let component: OperativoSearchComponent;
  let fixture: ComponentFixture<OperativoSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperativoSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperativoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
