import { Component, OnInit } from '@angular/core';
import { NbComponentShape, NbComponentSize, NbComponentStatus,NbToastrService } from '@nebular/theme';
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
  constructor(private parent: ParentService, private router: Router, private student:StudentService,private nbToastrService: NbToastrService){ }
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
      dien_thoai: new FormControl('', [Validators.required,Validators.pattern('^[0-9]+$'), Validators.minLength(10), Validators.maxLength(10)]),
    });
    this.getStudent();
  }





  addParent(){
    console.log(this.addForm);
    
    if(this.addForm.valid) {
      console.log(this.addForm.value);
      this.parent.addParent(this.addForm.value).subscribe({
        // this.router.navigate(['/pages', 'parent', 'list'])
        next: this.handleLoginSuccess.bind(this),
        error: this.handleError.bind(this)
      })
    }
  }

  getStudent() {
    this.student.getStudent().subscribe(res =>{
      console.log(res);
      this.listStudent = res.data
    })
  }

  protected handleLoginSuccess(res: any) {
    this.nbToastrService.show(
      'parent added successfully!',
      'Success',
      { status: 'success' }
    );
    this.router.navigate(['/pages/parent/list']).then();
    console.log(res);
  }
  protected handleError(error: any) {
    this.nbToastrService.show(
      'Failed to add parent. Please try again later.',
      'Error',
      { status: 'danger' }
    );
    console.error('Error adding parent:', error);
  }


  statuses: NbComponentStatus[] = [ 'primary' ];
  shapes: NbComponentShape[] = [ 'rectangle', 'semi-round', 'round' ];
  sizes: NbComponentSize[] = [ 'tiny', 'small', 'medium', 'large', 'giant' ];
}
