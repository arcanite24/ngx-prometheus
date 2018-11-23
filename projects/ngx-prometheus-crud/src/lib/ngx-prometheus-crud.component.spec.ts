import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPrometheusCrudComponent } from './ngx-prometheus-crud.component';

describe('NgxPrometheusCrudComponent', () => {
  let component: NgxPrometheusCrudComponent;
  let fixture: ComponentFixture<NgxPrometheusCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxPrometheusCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPrometheusCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
