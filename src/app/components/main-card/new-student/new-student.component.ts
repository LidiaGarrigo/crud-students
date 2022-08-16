import { Observable } from 'rxjs';
import { StudentsService } from 'src/app/services/students.service';
import { Component, OnInit } from '@angular/core';
import Student from 'src/app/models/Student';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.scss']
})
export class NewStudentComponent implements OnInit {
  students!: Observable<any>;
  name= '';
  surname = '';
  constructor(private studentService: StudentsService) { }

  ngOnInit(): void {

    this.students = this.studentService.getStudent();
  }

  sendStudent(){

    const body:Student = { id: 0, name: this.name, surname: this.surname}
    this.studentService.postStudents(body).subscribe((res:any) => {
      console.log(res);
      this.ngOnInit();
    });

  }
}
