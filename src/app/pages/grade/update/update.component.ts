import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassService } from 'app/@core/services/apis/class.service';
import { FormControl, Validators } from '@angular/forms';
import { BlocksService } from 'app/@core/services/apis/blocks.service';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { Iblocks } from 'app/@core/interfaces/blocks.interface';

@Component({
  selector: 'update-add',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  updateForm: FormGroup
  oneBlock: any

  constructor(
    private classes: ClassService,
    private blocks: BlocksService,
    private router: Router,
    private notifi: NbToastrService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.updateForm = new FormGroup ({
      ten_khoi: new FormControl('', Validators.required)
    })
    this.getOneBlocks()
  }

  getOneBlocks(){
    let id =+ this.route.snapshot.params['id'];
    this.blocks.getOneBlocks(id).subscribe(res=>{
      this.oneBlock = res.data
    })
  }

  updateBlocks() {
    if (this.updateForm.valid) {
      let id =+ this.route.snapshot.params['id'];
      this.blocks.updateBlocks(id, this.updateForm.value).subscribe(p=>{
        console.log(p);
        this.notifi.show('Blocks successfully add!', 'Success', { status: 'success' });
        this.router.navigate(['/pages/grade/list']);
      })
      console.log(this.updateForm.value);
    }
  }
}

