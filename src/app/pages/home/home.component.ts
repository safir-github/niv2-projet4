import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { SortPipe } from '../../pipes/sort.pipe';
import { SearchPipe } from '../../pipes/search.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, SortPipe, SearchPipe], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  searchTerm: string = '';
  sortOrder: 'asc' | 'desc' = 'asc';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http.get<any[]>('products.json').subscribe(
      data => {
        this.products = data;
      },
      error => {
        console.error('Erreur lors du chargement des produits :', error);
      }
    );
  }

  viewDetails(productId: number) {
    this.router.navigate(['/product', productId]);
  }

  sortProducts(order: 'asc' | 'desc') {
    this.sortOrder = order;
  }
}
