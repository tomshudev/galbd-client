import { TestBed } from '@angular/core/testing';

import { MissionValidatorService } from './mission-validator.service';

describe('MissionValidatorService', () => {
  let service: MissionValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MissionValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
