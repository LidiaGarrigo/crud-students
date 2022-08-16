import Student from 'src/app/models/Student';

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss']
})
export class MainCardComponent implements OnInit {

  constructor(private studentsService: StudentsService) { }
  name = '';
  surname = '';
  students!: Observable<any>;

  ngOnInit(): void {
    this.loadStudents();
    console.log("Esto es el main");
    console.log(this.students);
    this.studentsService.getStudent().subscribe((res)=> console.log("Esto es el res" + res));
  }
  loadStudents() {
    this.students = this.studentsService.getStudent();
  }
}
