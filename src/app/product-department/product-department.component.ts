import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product.module';

@Component({
  selector: 'product-department',
  template:"./product-department.html",
  styles: []
})
export class ProductDepartmentComponent implements OnInit {

  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
