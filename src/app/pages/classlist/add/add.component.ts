import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClassService } from 'app/@core/services/apis/class.service';
import { FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BlocksService } from 'app/@core/services/apis/blocks.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  creatForm: FormGroup

  listBlocks!: [];
  listGV!: [];

  constructor(
    private classes: ClassService,
    private blocks: BlocksService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.creatForm = new FormGroup ({
      ten_lop: new FormControl('', Validators.required),
      maKhoi: new FormControl('', Validators.required),
      maGV: new FormControl('', Validators.required)
    })
    this.getBlocks()
    this.getTeachers()
  }

  creatClass() {
    if (this.creatForm.valid) {
      this.classes.postClass(this.creatForm.value).subscribe(p=>{
        console.log(p);
        alert('Add success')
        this.router.navigate(['/pages/dslop/list']);
      })
      console.log(this.creatForm.value);
    }
  }

  getBlocks(){
    this.blocks.getAllBlocks().subscribe(res=>{
      this.listBlocks = res.data;
      console.log(this.listBlocks);
    })
  }

  getTeachers(){
    this.classes.getAllGV().subscribe(res=>{
      this.listGV = res.data;
      console.log(this.listGV);
    })
  }
}
