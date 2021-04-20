import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service'
@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})

export class DetailsProductComponent implements OnInit {
  products;
  product;;
  listproducts;
  url;

  constructor(public productsService : ProductsService) {
    this.products = [];
  }

  ngOnInit() {
    this.productsService.getData().subscribe(res => {
        this.products = res;
        //this.getProductId(1);
        console.log(this.product)
      },
      (err) => {  
        alert('failed loading json data');
      });
  }

  updateList(){
    this.productsService.getData().subscribe(res => {
      this.products=res;},
      (err) => {  
        alert('failed loading json data');
      });
  }
  
  updateProductN(name){
    this.updateList();
    for(let p of this.products){
      if(p.name== name){
        this.product = p;
      }
    }
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

  refreshData(){
    this.productsService.getData().subscribe(res => {
      this.products = res;
    },(err)=>{
      alert('failerd loading json data');
      console.log(err);
    });
  }

  addTransaction(name,qte,type){
      var idName = this.getProductNameID(name);
      //console.log(name)
      this.productsService.transactionUpdateProduct(idName,qte,type).subscribe(res => {
        console.log(res);
      },
      (err) => {  
        alert('failed loading json data');
      });
      this.refreshData();
    }
    
/*    date (ajoutée automatiquement lors de l’enregistrement de la transaction)
● prix
● quantité
● tigID (ID d’origine dans l’API de Bateau Thibault)
● type (une transaction peut être  0 un achat, 1 une vente, ou 2 des invendus)*/


  incrementQteStock(name,qte){
    var idName = this.getProductNameID(name);
    //console.log(name)
    this.productsService.increment(idName,qte).subscribe(res => {
      console.log(res);
    },
    (err) => {  
      alert('failed loading json data');
    });
    this.refreshData();
    this.addTransaction(name,qte,0);
 }

  decrementQteStock(name,qte){
    var idName = this.getProductNameID(name);

    this.productsService.decrement(idName,qte).subscribe(res => {
      console.log(res);
    },
    (err) => {  
      alert('failed loading json data');
    });
    this.refreshData();
    this.addTransaction(name,qte,1);
    
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
    this.refreshData();

  }


}
