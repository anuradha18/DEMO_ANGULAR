import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { routPrivGuard } from './rout-priv.guard';

describe('routPrivGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => routPrivGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
