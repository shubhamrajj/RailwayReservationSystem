import { TestBed } from '@angular/core/testing';

import { RailwayApiService } from './railway-api.service';

describe('RailwayApiService', () => {
  let service: RailwayApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RailwayApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
