import { TestBed } from '@angular/core/testing';

import { RootAppService } from './root-app.service';

describe('RootAppService', () => {
  let service: RootAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RootAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
