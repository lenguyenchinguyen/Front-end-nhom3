import { Component, OnInit } from '@angular/core';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';
import { ParentService } from 'app/@core/services/apis/parent.service';
import { FormGroup, Validators, FormControl, NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { StudentService } from 'app/@core/services/apis/student.service';
import { IStudent } from 'app/@core/interfaces/student.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  constructor(private add: ParentService, private router: Router, private student:StudentService){ }
  addForm!: FormGroup;
  listStudent : IStudent;

  ngOnInit(): void {
    this.addForm = new FormGroup({
      ho_ten: new FormControl ('', Validators.required),
      gioi_tinh: new FormControl('', Validators.required),
      ngay_sinh: new FormControl('', Validators.required),
      maHS: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      dia_chi: new FormControl('', Validators.required),
      dien_thoai: new FormControl('', Validators.required),
    });
    this.getStudent();
  }

  addParent(){
    if(this.addForm.valid) {
      console.log(this.addForm.value);
      this.add.addParent(this.addForm.value).subscribe(res=> {
        this.router.navigate(['/pages', 'parent', 'list'])
      })
    }
  }

  getStudent() {
    this.student.getStudent().subscribe(res =>{
      console.log(res);
      this.listStudent = res.data
    })
  }


  statuses: NbComponentStatus[] = [ 'primary' ];
  shapes: NbComponentShape[] = [ 'rectangle', 'semi-round', 'round' ];
  sizes: NbComponentSize[] = [ 'tiny', 'small', 'medium', 'large', 'giant' ];
}
