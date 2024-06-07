import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassService } from 'app/@core/services/apis/class.service';
import { FormControl, Validators } from '@angular/forms';
import { BlocksService } from 'app/@core/services/apis/blocks.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  updateForm: FormGroup

  oneClass: any
  listBlocks!: []
  listGV!: []

  constructor(
    private classes: ClassService,
    private blocks: BlocksService,
    private router: Router, 
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.updateForm = new FormGroup ({
      ten_lop: new FormControl('', Validators.required),
      maKhoi: new FormControl('', Validators.required),
      maGV: new FormControl('', Validators.required)
    })
    this.getBlocks()
    this.getTeachers()
    this.getOneClass()
  }

  updateClass() {
    if (this.updateForm.valid) {
      let id =+ this.route.snapshot.params['id'];
      this.classes.updateClass(id, this.updateForm.value).subscribe(p=>{
        console.log(p);
        alert('Update success')
        this.router.navigate(['/pages/classlist/list']);
      })
      console.log(this.updateForm.value);
    }
  }

  getOneClass(){
    let id =+ this.route.snapshot.params['id'];
    this.classes.getClassById(id).subscribe(res=>{
      this.oneClass = res.data 
    })
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
