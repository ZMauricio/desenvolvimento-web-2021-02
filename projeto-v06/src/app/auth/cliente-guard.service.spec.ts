import { TestBed } from '@angular/core/testing';

import { ClienteGuardService } from './cliente-guard.service';

describe('ClienteGuardService', () => {
  let service: ClienteGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
