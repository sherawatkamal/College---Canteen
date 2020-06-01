import {
  Observable
} from 'rxjs';
import {
  AngularFireDatabase
} from 'angularfire2/database';
import {
  AngularFireList
} from 'angularfire2/database';
import {
  ProductService
} from './../../product.service';
import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent {
  //Not-Working

  // productsRef: AngularFireList < any > ;
  // products: Observable < any[] >;
  // filteredProducts: any[];
  // allProducts: any[];

  // constructor(
  //   private af: AngularFireDatabase,
  //   private productService: ProductService
  //   ) {
  //     this.productsRef = this.af.list('/products/')
  //     this.products = this.productsRef.valueChanges();
  //     console.log(this.products);
  //     this.products.subscribe(res => this.allProducts = res);
  //   } 

  // filter(query:String) {
    
  // }
  filteredProducts = [{
    title: 'sandwich',
    price: 60,
    imageUrl: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2018/09/veg-mayo-sandwich-recipe-500x375.jpg'
  },
  {
    title: 'burger',
    price: 50,
    imageUrl: 'https://i.ytimg.com/vi/L6yX6Oxy_J8/maxresdefault.jpg'
  },
  {
    title: 'biscuit',
    price: 10,
    imageUrl: 'https://img.taste.com.au/3a3qvkDb/taste/2016/11/chocolate-and-cream-biscuits-97445-1.jpeg'
  },
  {
    title: 'pizza',
    price: 80,
    imageUrl: 'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Homemade-Pizza_EXPS_HCA20_376_E07_09_2b.jpg'
  }
];
products = [{
    title: 'sandwich',
    price: 60,
    imageUrl: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2018/09/veg-mayo-sandwich-recipe-500x375.jpg'
  },
  {
    title: 'burger',
    price: 50,
    imageUrl: 'https://i.ytimg.com/vi/L6yX6Oxy_J8/maxresdefault.jpg'
  },
  {
    title: 'biscuit',
    price: 10,
    imageUrl: 'https://img.taste.com.au/3a3qvkDb/taste/2016/11/chocolate-and-cream-biscuits-97445-1.jpeg'
  },
  {
    title: 'pizza',
    price: 80,
    imageUrl: 'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Homemade-Pizza_EXPS_HCA20_376_E07_09_2b.jpg'
  }
];
filter(query: string) {
  this.filteredProducts = (query) ?
    this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
    this.products;
}

    }
  // Not-Working

  // constructor(
  //   private af: AngularFireDatabase,
  //   private productService: ProductService
  // ) {
  //   this.products = af.list('/products/').valueChanges();
  //   console.log(this.products);
  // }




