import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import { HttpClient } from '@angular/common/http';
import Student from '../models/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService extends ApiServiceService<Student> {

  constructor(protected override http: HttpClient) {
    super(http);
  }

  getStudent(): Observable<Student> {
    console.log("Esto es el servicio student");
    return this.getData('students/list');
  }
  postStudents(body: any): any {
    this.addData('students/add', body);
  }

  deleteStudent(id: number) {
    this.deleteData('students/delete', id);
  }

  updateStudent(body: Student) {
    console.log(body);
    this.updateData('students/update', body);
  }

}
