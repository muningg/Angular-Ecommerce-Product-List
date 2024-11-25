import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Product } from '../Models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Mini TWS 4',
      description: 'Wireless Earbuds with Charging Case',
      price: 49.99,
      image: 'assets/Mini TWS 4.jpg',
      category: 'Audio'
    },
    {
      id: 2,
      name: 'Pro Black Headphones',
      description: 'Over-ear Professional Headphones',
      price: 129.99,
      image: 'assets/Pro Black Headphones.jpg',
      category: 'Audio'
    },
    {
      id: 3,
      name: 'Socks Bundle',
      description: 'Comfortable Cotton Socks Pack',
      price: 19.99,
      image: 'assets/Socks Bundle.jpg',
      category: 'Accessories'
    },
    {
      id: 4,
      name: 'Modern Chair',
      description: 'Ergonomic Design Chair',
      price: 199.99,
      image: 'assets/Modern Chair.jpeg',
      category: 'Furniture'
    },
    {
      id: 5,
      name: 'Color Pen Set',
      description: 'Premium Colored Pens',
      price: 24.99,
      image: 'assets/Color Pen Set.jpg',
      category: 'Stationery'
    },
    {
      id: 6,
      name: 'Smart Tag',
      description: 'Bluetooth Item Finder',
      price: 29.99,
      image: 'assets/Smart Tag.jpg',
      category: 'Electronics'
    },
    {
      id: 7,
      name: 'Pro Max Mouse',
      description: 'Wireless Gaming Mouse',
      price: 79.99,
      image: 'assets/Pro Max Mouse.jpg',
      category: 'Electronics'
    },
    {
      id: 8,
      name: 'Essential T-Shirt',
      description: 'Cotton Blend T-Shirt',
      price: 24.99,
      image: 'assets/Essential T-Shirt.jpg',
      category: 'Clothing'
    },
    {
      id: 9,
      name: 'Modern Desk',
      description: 'Minimalist Work Desk',
      price: 299.99,
      image: 'assets/Modern Desk.jpg',
      category: 'Furniture'
    },
    {
      id: 10,
      name: 'Screen Natural',
      description: 'Anti-Blue Light Screen Protector',
      price: 34.99,
      image: 'assets/Screen Natural.jpg',
      category: 'Accessories'
    },
    {
      id: 11,
      name: 'File Organizer',
      description: 'Document Management System',
      price: 14.99,
      image: 'assets/File Organizer.jpg',
      category: 'Office'
    },
    {
      id: 12,
      name: 'Pro Keyboard',
      description: 'Mechanical Gaming Keyboard',
      price: 149.99,
      image: 'assets/Pro Keyboard.jpg',
      category: 'Electronics'
    },
    {
      id: 13,
      name: 'Basic Note Pack',
      description: 'Lined Notebooks Set',
      price: 19.99,
      image: 'assets/Basic Note Pack.jpg',
      category: 'Stationery'
    },
    {
      id: 14,
      name: 'Gold Screen Guard',
      description: 'Premium Screen Protector',
      price: 39.99,
      image: 'assets/Gold Screen Guard.jpg',
      category: 'Accessories'
    },
    {
      id: 15,
      name: 'Study Notes Pack',
      description: 'Colorful Study Notes',
      price: 9.99,
      image: 'assets/Study Notes Pack.jpg',
      category: 'Stationery'
    },
    {
      id: 16,
      name: 'Pocket Charger',
      description: 'Portable Power Bank',
      price: 49.99,
      image: 'assets/Pocket Charger.jpg',
      category: 'Electronics'
    },
    {
      id: 17,
      name: 'Camera Cover',
      description: 'Protective Camera Case',
      price: 19.99,
      image: 'assets/Camera Cover.jpg',
      category: 'Accessories'
    },
    {
      id: 18,
      name: 'Type-C Hub',
      description: 'Multi-port USB Hub',
      price: 59.99,
      image: 'assets/Type-C Hub.jpg',
      category: 'Electronics'
    }
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  addProduct(product: Product): Observable<Product> {
    this.products.push(product);
    return of(product);
  }
}