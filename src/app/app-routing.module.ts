import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { BrandProductComponent } from './brand-product/brand-product.component';
import { CartComponent } from './cart/cart.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { ShopComponent } from './shop/shop.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'shop',component:ShopComponent
  },
  {
    path:'products/:id',component:ProductsComponent
  },  
  {
    path:'brands',component:BrandProductComponent
  },
  {
    path:'wishlist',component:WishlistComponent
  },
  {
    path:'cart',component:CartComponent
  },
  {
    path:'blog',component:BlogComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'contactUs',component:ContactUsComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
