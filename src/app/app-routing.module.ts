import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsProductComponent } from './details-product/details-product.component'
import { ProductsComponent } from './products/products.component'

import { AppComponent } from './app.component'

const routes: Routes = [
  {
    path: 'detailproduct',
    component : DetailsProductComponent
  },
  {
    path: 'home',
    component : AppComponent
  },
  {
    path: 'products',
    component : ProductsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
