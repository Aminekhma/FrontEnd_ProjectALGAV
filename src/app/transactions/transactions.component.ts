import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  listTransactions;

  constructor(public transactionService : TransactionService) { 
    this.listTransactions = []
  }

  ngOnInit(): void {
    this.transactionService.getData().subscribe(res=>{
      this.listTransactions = res;
    },(err)=>{
      alert(err);
    })
  }

  postTransactions(date,price,quantity,tigID,transaction_type){
    this.transactionService.postTransaction({date,price,quantity,tigID,transaction_type}).subscribe(res=>{
      console.log(res);
    },(err)=>{
      alert(err);
    })
  }

}
