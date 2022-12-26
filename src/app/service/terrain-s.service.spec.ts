import { TestBed } from '@angular/core/testing';

import { TerrainSService } from './terrain-s.service';

describe('TerrainSService', () => {
  let service: TerrainSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TerrainSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
