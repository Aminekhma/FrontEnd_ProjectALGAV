import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  listTransactions;
  listCut;
  date;
  cpt;

  constructor(public transactionService : TransactionService) { 
    this.listTransactions = []
    this.listCut = []

  }

  ngOnInit(): void {
    this.transactionService.getData().subscribe(res=>{
      this.listTransactions = res;

    },(err)=>{
      alert(err);
    })
  }

  refreshTransaction(){
    this.transactionService.getData().subscribe(res => {
      this.listTransactions = res;
      this.listCut = []
    },(err)=>{
      alert('failerd loading json data');
      console.log(err);
    });
  }

  postTransactions(date,quantity,tigID,transaction_type){
    this.transactionService.postTransaction({date,quantity,tigID,transaction_type}).subscribe(res=>{
      console.log(res);
      this.refreshTransaction();
    },(err)=>{
      alert(err);
    })
    this.refreshTransaction();

  }

  getNewList(){
    for(let p of this.listTransactions.reverse()){
      if(this.listCut.length <= 100){
        this.listCut.push(p)
      }      
    }
    return this.listCut

  }

  convertDate(d){
    this.date = new Date(d);
    return this.date.getFullYear()+'-'+(this.date.getMonth()+1)+'-'+
    this.date.getDate()+"  "+this.date.getHours()+':'+this.date.getMinutes();

  }



}
