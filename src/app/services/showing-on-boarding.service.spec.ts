import { TestBed } from '@angular/core/testing';

import { ShowingOnBoardingService } from './showing-on-boarding.service';

describe('ShowingOnBoardingService', () => {
  let service: ShowingOnBoardingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowingOnBoardingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
