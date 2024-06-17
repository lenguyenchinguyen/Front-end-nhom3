import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
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
  
  constructor(private update: SubjectService, private takeRouter: ActivatedRoute, private router: Router ,private toastrService: NbToastrService){
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
      this.update.putSubject(this.maMon,this.updateForm.value).pipe().subscribe( {
        next: this.handleLoginSuccess.bind(this),
        error: this.handleError.bind(this),
      })
    }
  }
  protected handleLoginSuccess(res: any) {
    this.toastrService.show(
      'Subject has been updated successfully!',
      'Success',
      { status: 'success' }
    );
    this.router.navigate(['/pages/subject/list']).then();
    console.log(res);
  }

  protected handleError(error: any) {
    this.toastrService.show(
      'Failed to add Subject. Please try again later.',
      'Error',
      { status: 'danger' }
    );
    console.error('Error adding Subject:', error);
  }
}
