import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ParentService } from 'app/@core/services/apis/parent.service';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {
  constructor(private dele: ParentService, private router:Router) { } 

  deleteParent(maPH:number) {
    this.dele.deleteParent(maPH).subscribe(res =>{
      console.log(res.data);
      this.router.navigate(['/pages', 'parent', 'list'])
    })
  }
}
