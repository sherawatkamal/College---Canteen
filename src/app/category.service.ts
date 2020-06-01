import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"; 


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

    categories;

  constructor(private af: AngularFireDatabase) { }

  getCategories () {
    this.categories = Object.values(this.af.list('/categories/'));
    return this.categories;
  }
}

