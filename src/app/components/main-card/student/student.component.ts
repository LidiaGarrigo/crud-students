import { StudentsService } from './../../../services/students.service';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Student from 'src/app/models/Student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  @Input() student!: Student;

  constructor(private studentsService: StudentsService) { }

  edit = false;
  name= '';
  surname= '';

  ngOnInit(): void {
    this.name = this.student.name;
    this.surname = this.student.surname;
    console.log("this.student");
  }

  deleteClick(id: number) {
    this.studentsService.deleteStudent(id);
  }

  updateClick() {
    this.edit = !this.edit;
  }

  updateSendData() {
    console.log('Hola, estem aquí:');
    if (this.student.name != '' && this.student.surname != '') {
      const body: Student = { id: this.student.id, name: this.name, surname: this.surname };
      console.log('Dins de lif:', body);
      this.studentsService.updateStudent(body);

    }
  }

}
