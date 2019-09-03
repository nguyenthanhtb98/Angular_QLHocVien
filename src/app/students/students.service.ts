import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import {Router} from '@angular/router';
export interface Student{
    id: string;
    name: string;
    sex: string;
    birthday: Date;
    address: string;
  }

@Injectable()

export class StudentsService {
    students: Student[] = [
      {
        id: '100',
        name: 'Nguyễn Thế Vương',
        sex: 'Nam',
        birthday: new Date(1990,10,20),
        address: 'Hà Nội'
      },
      {
        id: '101',
        name: 'Bùi Văn Bảo',
        sex: 'Nam',
        birthday: new Date(1991,8,8),
        address: 'Hà Nội'
      },
      {
        id: '102',
        name: 'Ngô Hoàng Quân',
        sex: 'Nam',
        birthday: new Date(1992,10,11),
        address: 'Hà Nội'
      }
    ];
    studentsUpdated = new Subject();

    constructor( private router: Router) { }
  

    getStudents(): Student[] {
      return [...this.students];
    }
  
    getStudentById(id: string): Student {
      return this.students.find(Student=> Student.id===id);
    }
  
    addStudent(student: Student) {
      const isExists = this.students.some(p => p.id === student.id);
      if (isExists) {
        alert('Đã tồn tại');
      } else { 
        this.students.push(student);
        this.studentsUpdated.next();
      }
    }
    editStudent(newInfoStudent: Student)
    {
      this.students.find(Student=> Student.id===newInfoStudent.id).name = newInfoStudent.name;
      this.students.find(Student=> Student.id===newInfoStudent.id).sex = newInfoStudent.sex;
      this.students.find(Student=> Student.id===newInfoStudent.id).birthday = newInfoStudent.birthday;
      this.students.find(Student=> Student.id===newInfoStudent.id).address = newInfoStudent.address;
      this.studentsUpdated.next();
      this.router.navigate(['/students']); //điều hướng về component students để xem lại danh sách đã sửa
    }

    removeStudent(id: string) {
      this.students = this.students.filter(student => student.id != id);
      this.studentsUpdated.next();
    }
  }