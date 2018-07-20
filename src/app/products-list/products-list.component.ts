import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.module';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html'
})
export class ProductsListComponent implements OnInit {

  //To designate an input, we use the @Input() decoration on a component class property
  @Input() productList: Product[];

  /**@output onProductSelected - outputs the current
  //Product whenever a new Product is selected**/
  @Output() onProductSelected: EventEmitter<Product>;

  private currentProduct: Product;
  constructor() {
    this.onProductSelected = new EventEmitter();
   }

  ngOnInit() {
  }

  clicked(product: Product): void{

    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean{
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.SKU === this.currentProduct.SKU;
    
  }

}
