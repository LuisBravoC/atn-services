import { TestBed } from '@angular/core/testing';

import { CaliberService } from './caliber.service';

describe('CaliberService', () => {
  let service: CaliberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaliberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
