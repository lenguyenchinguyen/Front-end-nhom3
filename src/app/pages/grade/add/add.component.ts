
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClassService } from 'app/@core/services/apis/class.service';
import { FormControl, Validators } from '@angular/forms';
import { BlocksService } from 'app/@core/services/apis/blocks.service';
import { NbDialogService, NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  creatForm: FormGroup

  constructor(
    private classes: ClassService,
    private blocks: BlocksService,
    private router: Router,
    private notifi: NbToastrService,
  ){}

  ngOnInit(): void {
    this.creatForm = new FormGroup ({
      ten_khoi: new FormControl('', Validators.required)
    })
  }

  creatGrade() {
    if (this.creatForm.valid) {
      this.blocks.postBlocks(this.creatForm.value).subscribe(p=>{
        console.log(p);
        this.notifi.show('Blocks successfully add!', 'Success', { status: 'success' });
        this.router.navigate(['/pages/grade/list']);
      })
      console.log(this.creatForm.value);
    }
  }
}

