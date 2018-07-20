import { Component, EventEmitter } from '@angular/core';
import { Product } from './product.module';

@Component({
  selector: 'inventory-app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  products : Product[];

  constructor(){
    this.products =[new Product('MYSHOES', 
                              'Black Running Shoes', 
                              '/assets/images/products/black-shoes.jpg', 
                              ['Men','Shoes','Running Shoes'], 
                              109.99),
                  new Product('NEATOJACKET', 
                              'Blue Jacket', 
                              '/assets/images/products/blue-jacket.jpg', 
                              ['Women','Appareal','Jackets & Vests'], 
                              238.99),
                  new Product('NICEHAT', 
                              'A Nice Black Hat', 
                              '/assets/images/products/black-hat.jpg', 
                              ['Men','Accessories','Hats'], 
                              29.99)];


  }

  productWasSelected(selectedProduct: Product): void{
    console.log(`Selected product ${selectedProduct}.`);

  }
}
