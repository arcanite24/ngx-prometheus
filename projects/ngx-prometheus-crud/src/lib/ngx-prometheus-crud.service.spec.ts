import { TestBed } from '@angular/core/testing';

import { NgxPrometheusCrudService } from './ngx-prometheus-crud.service';

describe('NgxPrometheusCrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxPrometheusCrudService = TestBed.get(NgxPrometheusCrudService);
    expect(service).toBeTruthy();
  });
});
