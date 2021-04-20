import { Component, OnInit } from '@angular/core';
import Chart, { ChartType, ChartOptions } from 'chart.js';
import { ProductsService } from '../services/products.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
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
  }

  ngOnInit(): void {
    this.productsService.getData().subscribe(res => {
      this.products = res;
      this.initialazeTab();
      console.log(res)
      var myChart = new Chart("myChart", {
        type: 'pie',
        data: {
          labels: ['Poission', 'Fruit de mer', 'Crustacée'],
          datasets: [{
              label: '# of Votes',
              data: [Number(this.poisson.length),Number(this.fruitdemer.length),Number(this.crustacer.length)],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)'
              ],
              borderWidth: 1
          }]
        },
        options:{
          scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    display: false
                }
            }]
        }
        }
      });
    },
    
    (err) => {  
      alert('failed loading json data');
      var myChart = new Chart("myChart", {
        type: 'pie',
        data: {
          labels: ['Poission', 'Fruit de mer', 'Crustacée'],
          datasets: [{
              label: '# of Votes',
              data: [Number(this.poisson.length),Number(this.fruitdemer.length),Number(this.crustacer.length)],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)'
              ],
              borderWidth: 1
          }]
        },
        options:{
          scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
        }
      });
    });

    
  }
  

}
