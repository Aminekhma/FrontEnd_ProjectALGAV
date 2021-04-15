import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service'
@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})

export class DetailsProductComponent implements OnInit {
  products;
  product;
  listProducts;
  url;

  constructor(public productsService : ProductsService) {
    this.products = [];
  }

  ngOnInit() {
    this.productsService.getData().subscribe(res => {
        this.products = res;
        this.listProducts = res;
        this.getProductId(1);
        //this.getProductName(this.result)
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

  getProductName(name){
    for(let p of this.products){
      if(p.name== name){
        this.product = p;
      }
    }
  }
  getProductNameID(name){
    for(let p of this.products){
      if(p.name== name){
        return p.tigID
      }
    }
  }

  incrementQteStock(qte,name){

    this.url="http://127.0.0.1:8000/incrementStock/"+this.getProductNameID(name)+"/"+qte+"/"
    window.open(this.url);

  }

  decrementQteStock(qte,name){

    this.url="http://127.0.0.1:8000/decrementStock/"+this.getProductNameID(name)+"/"+qte+"/"
    window.open(this.url);

  }

    
  changePourcentage(pourcentage,name){
    this.url="http://127.0.0.1:8000/changePourcent/"+this.getProductNameID(name)+"/"+pourcentage+"/"
    window.open(this.url);

  }



}
