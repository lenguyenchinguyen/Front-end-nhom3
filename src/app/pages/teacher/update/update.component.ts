import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';
import { ActivatedRoute, Router } from '@angular/router';

import { TeacherService } from 'app/@core/services/apis/teacher.service';
import { ITeacher } from '../list/list.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  putTeacher: FormGroup;
  ListId: ITeacher;
  maGV: number;

  constructor(
    private teacherService: TeacherService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.maGV = this.route.snapshot.params['maGV']; 
    this.putTeacher = new FormGroup({
      ten_GV: new FormControl('',Validators.required),
      gioi_tinh: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      trinh_do: new FormControl(''),
      mat_khau: new FormControl('', [Validators.required, Validators.minLength(8)]),
      dien_thoai: new FormControl('', [Validators.required,Validators.pattern(/^\d{10}$/)]),
    });
    this.editTeacher(this.maGV);
  }

  editTeacher(maGV: number) {
    this.teacherService.getTeacherById(maGV).subscribe(res => {
      this.ListId = res.data;
      this.putTeacher.patchValue(this.ListId);
    });
  }

  saveTeacher() {
    if (this.putTeacher.valid) {
      this.teacherService.putTeacher(this.maGV, this.putTeacher.value).subscribe(res => {
        console.log(res);
        this.router.navigate(['/pages/teacher/list']);
      });
    }
  }

  statuses: NbComponentStatus[] = ['success'];
  shapes: NbComponentShape[] = ['rectangle', 'semi-round', 'round'];
  sizes: NbComponentSize[] = ['tiny', 'small', 'medium', 'large', 'giant'];
}