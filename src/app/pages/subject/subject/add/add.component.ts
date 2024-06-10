import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubjectService } from 'app/@core/services/apis/subject.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  addForm!: FormGroup
 

  constructor(private sub: SubjectService, private router: Router) { }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      ten_mon: new FormControl('', Validators.required),
    });
  }
  create() {
    if (this.addForm.valid) {
      this.sub.postSubject(this.addForm.value).subscribe(res => {
        console.log(res);
        this.router.navigate(['/pages/subject/list']);
      })
    }
  }
}
