import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  template: `
  <ul>
    <li *ngFor="let item of collection | paginate: { itemsPerPage: 10, currentPage: p }"> ... </li>
  </ul>
             
  <pagination-controls (pageChange)="p = $event"></pagination-controls>
  `,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
searchKey:string='';

  allRecipies: any = []
  p: number = 1;
    collection: any[] = this.allRecipies;  
  ngOnInit(): void {
    this.getRecipies()
  }
  constructor(private api: ApiService) { }
  recipie: any


  getRecipies() {
    this.api.getRecipiesAPI().subscribe({
      next: (res: any) => {
        this.allRecipies = res.recipes

      },
      error: (reason: any) => {
        alert(reason.error)
      }
    })

  }
  updateSearchKey(event: Event) {
    this.searchKey = (event.target as HTMLInputElement).value;
  }

}
