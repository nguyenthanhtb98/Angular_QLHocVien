import { Component, OnInit } from '@angular/core';
import { Student, StudentsService } from '../students/students.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {

  student: Student;
  constructor(private route: ActivatedRoute,private studentsService: StudentsService) 
  { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const studentID = params.get('studentID');
      this.student = this.studentsService.getStudentById(studentID);
      
    })
  }

  editStudent(newInfoStudent: Student): void
  {
      this.studentsService.editStudent(newInfoStudent);
  }

}
