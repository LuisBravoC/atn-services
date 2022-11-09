import { TestBed } from '@angular/core/testing';

import { HeightsService } from './heights.service';

describe('HeightsService', () => {
  let service: HeightsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeightsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
