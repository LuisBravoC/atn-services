import { TestBed } from '@angular/core/testing';

import { RhombusService } from './rhombus.service';

describe('RhombusService', () => {
  let service: RhombusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RhombusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
