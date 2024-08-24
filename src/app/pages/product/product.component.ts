import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule, CurrencyPipe } from '@angular/common'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],  
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any[] = [];

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
}
