import { Component, OnInit } from '@angular/core';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';
import { ParentService } from 'app/@core/services/apis/parent.service';
import { FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import {ActivatedRoute, Router } from '@angular/router';
import { IParent } from 'app/@core/interfaces/parent.interface';
import { StudentService } from 'app/@core/services/apis/student.service';
import { IStudent } from 'app/@core/interfaces/student.interface';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  constructor(private update:ParentService, private router: Router, private route:ActivatedRoute,private student:StudentService){ }
  updateForm!: FormGroup;
  maPH =  this.route.snapshot.params['maPH'];
  List: IParent;
  listStudent: IStudent;
  

  ngOnInit(): void {
    this.updateForm = new FormGroup({
      ho_ten: new FormControl ('', Validators.required),
      gioi_tinh: new FormControl('', Validators.required),
      ngay_sinh: new FormControl('', Validators.required),
      maHS: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      dia_chi: new FormControl('', Validators.required),
      dien_thoai: new FormControl('', Validators.required),
    });
    this.getUpdate(this.maPH);
    this.getStudent();
  }

  getUpdate(maPH:number){
    this.update.getUpdateById(maPH).subscribe(res =>{
      console.log(res);
      this.List = res.data;
    })
  }

  getStudent() {
    this.student.getStudent().subscribe(res =>{
      console.log(res);
      this.listStudent = res.data
    })
  }

  putStudent(){
    if(this.updateForm.valid) {
      console.log(this.updateForm.value);
      this.update.updateParent(this.maPH,this.updateForm.value).subscribe(res=> {
        this.router.navigate(['/pages', 'parent', 'list'])
      })
    }
  }


  statuses: NbComponentStatus[] = [ 'success' ];
  shapes: NbComponentShape[] = [ 'rectangle', 'semi-round', 'round' ];
  sizes: NbComponentSize[] = [ 'tiny', 'small', 'medium', 'large', 'giant' ];
}
