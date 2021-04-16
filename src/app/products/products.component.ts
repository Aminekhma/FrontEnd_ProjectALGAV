import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product;
  products;
  poisson;
  crustacer;
  fruitdemer;


  constructor(public productsService : ProductsService) {
    this.products = [];
    this.poisson = [];
    this.crustacer = [];
    this.fruitdemer = [];
  }
  ngOnInit() {
    this.productsService.getData().subscribe(res => {
        this.products = res;
        this.getProductId(1);
        this.initialazeTab();
      },
      (err) => {  
        alert('failed loading json data');
      });
  }

  getProductId(id){
    for(let p of this.products){
      if(p.tigID == 1){
        this.product = p;
      }
    }
  }

  initialazeTab(){
    for(let p of this.products){
      if(p.category == 0){
        this.poisson.push(p);
      }
      if(p.category == 1){
        this.fruitdemer.push(p);
      }
      if(p.category == 2){
        this.crustacer.push(p);
      }
    }
    console.log(this.crustacer)
  }



}
