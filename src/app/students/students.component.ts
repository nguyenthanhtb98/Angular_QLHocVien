import { Component, OnInit } from '@angular/core';
import { StudentsService, Student } from './students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students: Student[];
  id = '';
  name = '';
  birthday = new Date(1000,1,1);
  sex = '';
  address = '';
  constructor(
    private studentService : StudentsService
    )
    { }

  ngOnInit() {
    this.students = this.studentService.getStudents();
    this.studentService.studentsUpdated.subscribe(() => {
      this.students = this.studentService.getStudents();
    });
  }


  addStudent(): void {
    const newStudent: Student = {
      id: this.id,
      name: this.name,
      sex: this.sex,
      birthday: this.birthday,
      address: this.address,
    };
    this.studentService.addStudent(newStudent)
  }

  removeStudent(id: string):void
  {
      this.studentService.removeStudent(id);
  }
}
