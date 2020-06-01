
import { ProductService } from './../../product.service';
import {
  AngularFireDatabase
} from "angularfire2/database";
import {
  Observable
} from 'rxjs';
import {
  CategoryService
} from './../../category.service';
import {
  Component,
  OnInit
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  categories$;
  id;

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private categoryService: CategoryService,
    private af: AngularFireDatabase, 
    private productService: ProductService
    ) {
    this.categories$ = Object.values(this.af.list('/categories/'));
  }

  save(product) {
    this.productService.create(product);
    this.router.navigate(['../admin/products']);
  }

}
