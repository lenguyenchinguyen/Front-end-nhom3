import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'app/@core/services/apis/student.service';

@Component({
  selector: 'app-delete',
  template: `<router-outlet></router-outlet>`,
})
export class DeleteComponent implements OnInit {
  constructor(private dele: StudentService, private router:Router){}
  ngOnInit(): void {
    
  }

  deleteStudent(maHS:number) {
    this.dele.deleteStudent(maHS).subscribe(res =>{
      console.log(res.data);
      this.router.navigate(['/pages', 'student', 'list'])
    })
  }
}
