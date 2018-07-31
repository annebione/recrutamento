import { TestBed, inject } from '@angular/core/testing';

import { MedicService } from './medic.service';

describe('MedicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MedicService]
    });
  });

  it('should be created', inject([MedicService], (service: MedicService) => {
    expect(service).toBeTruthy();
  }));
});
