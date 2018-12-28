import { TestBed } from '@angular/core/testing';

import { VoterformService } from './voterform.service';

describe('VoterformService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VoterformService = TestBed.get(VoterformService);
    expect(service).toBeTruthy();
  });
});
