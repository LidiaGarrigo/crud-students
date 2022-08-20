
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { mockStudentArray } from 'src/mocks/mockStudents';
import Student from '../models/Student';

import { ApiServiceService } from './api-service.service';

describe('ApiServiceService', () => {
  let service: ApiServiceService<Student[]>;
  let httpController: HttpTestingController;

  const params: string = 'students/list';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ApiServiceService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getAllStudents and return an array of Students', () => {

    // 1
    service.getData(params).subscribe((res) => {
      //2
      expect(res).toEqual(mockStudentArray);
    });

    //3
    const req = httpController.expectOne({
      method: 'GET',
      url: `${environment.apiUrl}${params}`,
    });

    //4
    req.flush(mockStudentArray);
  });
});
