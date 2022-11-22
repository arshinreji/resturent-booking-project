import { TestBed } from '@angular/core/testing';

import { HangService } from './hang.service';

describe('HangService', () => {
  let service: HangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
