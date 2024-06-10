import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassService } from 'app/@core/services/apis/class.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {
    constructor(
      private classes: ClassService,
      private route : ActivatedRoute,
      private router: Router
    ){}

    deleteClass() {
      let id =+ this.route.snapshot.params['id'];
      this.classes.deleteClass(id).subscribe(res =>{
        alert('Delete success')
          this.router.navigate(['/pages/dslop/list']);
      },error => {
        console.error(error)
      });
    }
}
