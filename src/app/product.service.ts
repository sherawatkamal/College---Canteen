import {
  AngularFireDatabase
} from 'angularfire2/database';
import {
  Injectable
} from '@angular/core';
import {
  from
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) {}


  create(product) {
    return this.db.list('/products').push(product);
  }

  getAll() {
    return this.db.list('/products').valueChanges();
  }

  update(productId, product) {
    return this.db.object('/products/'+productId).update(product); 
  }
}
