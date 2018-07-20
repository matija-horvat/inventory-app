import { Component, OnInit, Input, Output, HostBinding } from '@angular/core';
import { Product} from '../product.module';


@Component({
  selector: 'product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {

  @Input() product: Product;

/*   The HostBinding decoration lets us set attributes on the host element. The host is the
  element this component is attached to.
  In this case, we’re using the Semantic UI item class. Here when we say @HostBinding('attr.class')
  cssClass = 'item'; we’re saying that we want to attach the CSS class item to the host element. */
  @HostBinding('attr.class') cssClass = 'item';
  
  constructor() { }

  ngOnInit() {
  }

}
