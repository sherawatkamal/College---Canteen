import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  filteredCategory = [{
    title: 'sandwich',
    price: 60,
    category:'Sandwiches',
    imageUrl: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2018/09/veg-mayo-sandwich-recipe-500x375.jpg'
  },
  {
    title: 'burger',
    price: 50,
    category:'Burgers',
    imageUrl: 'https://i.ytimg.com/vi/L6yX6Oxy_J8/maxresdefault.jpg'
  },
  {
    title: 'biscuit',
    category:'Extras',
    price: 10,
    imageUrl: 'https://img.taste.com.au/3a3qvkDb/taste/2016/11/chocolate-and-cream-biscuits-97445-1.jpeg'
  },
  {
    title: 'pizza',
    category:'Pizzas',
    price: 80,
    imageUrl: 'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Homemade-Pizza_EXPS_HCA20_376_E07_09_2b.jpg'
  }];

  products = [{
    title: 'sandwich',
    price: 60,
    category:'Sandwiches',
    imageUrl: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2018/09/veg-mayo-sandwich-recipe-500x375.jpg'
  },
  {
    title: 'burger',
    price: 50,
    category:'Burgers',
    imageUrl: 'https://i.ytimg.com/vi/L6yX6Oxy_J8/maxresdefault.jpg'
  },
  {
    title: 'biscuit',
    category:'Extras',
    price: 10,
    imageUrl: 'https://img.taste.com.au/3a3qvkDb/taste/2016/11/chocolate-and-cream-biscuits-97445-1.jpeg'
  },
  {
    title: 'pizza',
    category:'Pizzas',
    price: 80,
    imageUrl: 'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Homemade-Pizza_EXPS_HCA20_376_E07_09_2b.jpg'
  }
];
categories = [{
  title: 'Sandwiches'
 }, {
   title:'Pizzas'
 }, {
   title:'Burgers'
 }, {
   title:'Noddles'
 }, {
   title:'Thali'
 }, {
   title:'Pasta'
 }, {
   title:'Dosa'
 }, {
   title:'Paratha'
 }, {
   title:'Pastry'
 }, {
   title:'Bevarages'
 }, {
   title:'Extras'
 }];

 
  


}


