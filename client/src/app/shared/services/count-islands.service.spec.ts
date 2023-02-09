import { TestBed } from '@angular/core/testing';

import { CountIslandsService } from './count-islands.service';

describe('CountIslandsService', () => {
  let service: CountIslandsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountIslandsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
