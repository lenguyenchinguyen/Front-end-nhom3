import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ISubject } from 'app/@core/interfaces/subject.interface';
import { SubjectService } from 'app/@core/services/apis/subject.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
  updateForm: FormGroup;
  ListById: ISubject;
  
  constructor(private update: SubjectService, private takeRouter: ActivatedRoute, private router: Router ){
  }
  maMon = this.takeRouter.snapshot.params['maMon']
  ngOnInit(): void {
    this.updateForm = new FormGroup({
      ten_mon: new FormControl('', Validators.required),
    });
    this.getUpdate(this.maMon);
  }
  getUpdate(maMon: number){
    this.update.getSubjectBymaMon(maMon).subscribe(res => {
      console.log(res.data);
      this.ListById = res.data
    })
  }
  saveUpdateSubject(){
    if(this.updateForm.valid){
      this.update.putSubject(this.maMon,this.updateForm.value).subscribe(res => {
        this.router.navigate(['/pages', 'subject', 'list']);
      })
    }
  }

}
