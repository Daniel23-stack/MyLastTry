import { TestBed } from '@angular/core/testing';

import { CreatedPageService } from './created-page.service';

describe('CreatedPageService', () => {
  let service: CreatedPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatedPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
