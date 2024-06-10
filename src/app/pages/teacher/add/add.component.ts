import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { TeacherService } from 'app/@core/services/apis/teacher.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  
  addForm!: FormGroup;

  constructor(private teacherService: TeacherService,
              private router: Router,
  ) { }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      ten_GV: new FormControl('', Validators.required),
      gioi_tinh: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      trinh_do: new FormControl('', Validators.required),
      mat_khau: new FormControl('', [Validators.required, Validators.minLength(8)]),
      dien_thoai: new FormControl('', [Validators.required,  Validators.pattern(/^\d{10}$/)]),
    });
  }

  create() {
    if (this.addForm.valid) {
      this.teacherService.addTeacher(this.addForm.value).pipe().subscribe({
        next: this.handleLoginSuccess.bind(this)
      })
    }
  }
  protected handleLoginSuccess(res: any) {
    this.router.navigate(['/pages/teacher/list']).then()
    console.log(res);
   }
  }