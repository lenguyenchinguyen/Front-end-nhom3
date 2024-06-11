import { Component, OnInit } from '@angular/core';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';
import { FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { StudentService } from 'app/@core/services/apis/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IStudent } from 'app/@core/interfaces/student.interface';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  constructor(private update:StudentService, private router: Router, private route:ActivatedRoute){ }
  updateForm!: FormGroup;
  maHS = this.route.snapshot.params['maHS'];
  List:IStudent;
  listClass : IStudent;
  
  ngOnInit(): void {
    this.updateForm = new FormGroup({
      ho_ten: new FormControl ('', Validators.required),
      gioi_tinh: new FormControl('', Validators.required),
      ngay_sinh: new FormControl('', Validators.required),
      maLop: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      dia_chi: new FormControl('', Validators.required),

    });
    this.getUpdate(this.maHS);
    this.getClass();
  }

  getUpdate(maHS:number){
    this.update.getUpdateById(maHS).subscribe(res =>{
      console.log(res);
      this.List = res.data;
      
    })
  }

  getClass() {
    this.update.getClass().subscribe(res => {
      console.log(res);
      this.listClass = res.data;
    })
  }

  

  putStudent(){
    if(this.updateForm.valid) {
      console.log(this.updateForm.value);
      this.update.updateStudent(this.maHS,this.updateForm.value).subscribe(res=> {
        this.router.navigate(['/pages', 'student', 'list'])
      })
    }
  }

  statuses: NbComponentStatus[] = [ 'info' ];
  shapes: NbComponentShape[] = [ 'rectangle', 'semi-round', 'round' ];
  sizes: NbComponentSize[] = [ 'tiny', 'small', 'medium', 'large', 'giant' ];
}