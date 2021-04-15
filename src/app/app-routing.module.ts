import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsProductComponent } from './details-product/details-product.component'
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
