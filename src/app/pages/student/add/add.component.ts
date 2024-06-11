import { Component, OnInit } from '@angular/core';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';
import { FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { StudentService } from 'app/@core/services/apis/student.service';
import { Router } from '@angular/router';
import { IStudent } from 'app/@core/interfaces/student.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  constructor(private add:StudentService, private router: Router){ }
  addForm!: FormGroup;
  listClass : IStudent;

  ngOnInit(): void {
    this.addForm = new FormGroup({
      ho_ten: new FormControl ('', Validators.required),
      gioi_tinh: new FormControl('', Validators.required),
      ngay_sinh: new FormControl('', Validators.required),
      maLop: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      dia_chi: new FormControl('', Validators.required),

    });
    this.getClass()
  }

  getClass() {
    this.add.getClass().subscribe(res => {
      console.log(res);
      this.listClass = res.data;
    })
  }
 

  addStudent(){
    if(this.addForm.valid) {
      console.log(this.addForm.value);
      this.add.addStudent(this.addForm.value).subscribe(res=> {
        this.router.navigate(['/pages', 'student', 'list'])
      })
    }
  }

  statuses: NbComponentStatus[] = [ 'info' ];
  shapes: NbComponentShape[] = [ 'rectangle', 'semi-round', 'round' ];
  sizes: NbComponentSize[] = [ 'tiny', 'small', 'medium', 'large', 'giant' ];
}