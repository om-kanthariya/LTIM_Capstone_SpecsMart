import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SpecsService } from './specs.service';

describe('SpecsService', () => {
  let service: SpecsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SpecsService]
    });

    service = TestBed.inject(SpecsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  fit('frontend_specs service should be created', () => {
    expect(service).toBeTruthy();
  });
});