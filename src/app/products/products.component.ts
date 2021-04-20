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
  isClicked;

  constructor(public productsService : ProductsService) {
    this.products = [];
    this.poisson = [];
    this.crustacer = [];
    this.fruitdemer = [];
    this.isClicked = false;
    
  }
  ngOnInit() {
    this.productsService.getData().subscribe(res => {
        this.products = res;
        //this.getProductId(1);
        this.poisson = [];
        this.crustacer = [];
        this.fruitdemer = [];
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

  getProductName(name){
    for(let p of this.products){
      if(p.name== name){
        this.product = p;
        this.isClicked = true;
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
  
  refreshData(){
    this.productsService.getData().subscribe(res => {
      this.products = res;
    },(err)=>{
      alert('failerd loading json data');
      console.log(err);
    });
  }

  incrementQteStock(name,qte){
    var idName = this.getProductNameID(name);
    //console.log(name)
    this.productsService.increment(idName,qte).subscribe(res => {
      console.log(res);
    },
    (err) => {  
      alert('failed loading json data');
    });
    this.ngOnInit();
  }


  decrementQteStock(name,qte){
    var idName = this.getProductNameID(name);
    //console.log(name)
    //this.ngOnInit();
    this.productsService.decrement(idName,qte).subscribe(res => {
      console.log(res);
    },
    (err) => {  
      alert('failed loading json data');
    });
    this.ngOnInit();
  }

  changePercent(name,p){
    var idName = this.getProductNameID(name);
    console.log(idName)
    console.log(p)
    console.log(typeof(p));
    this.productsService.percent(idName,p).subscribe(res => {
      console.log(res);
    },
    (err) => {
      alert('failed loading json data');
    });
    this.ngOnInit();
  }

}
