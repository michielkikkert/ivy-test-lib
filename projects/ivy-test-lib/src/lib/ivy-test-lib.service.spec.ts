import { TestBed } from '@angular/core/testing';

import { IvyTestLibService } from './ivy-test-lib.service';

describe('IvyTestLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IvyTestLibService = TestBed.get(IvyTestLibService);
    expect(service).toBeTruthy();
  });
});
