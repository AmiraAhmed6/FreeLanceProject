import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', component: ProductComponent },
  {path:'Product',component:ProductComponent},
  {path:'AboutUs',component:AboutUsComponent},
  {path:'ContactUs',component:ContactUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
