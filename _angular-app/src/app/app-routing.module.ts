import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { ProductCategoryListComponent } from './components/pages/product-category/product-category-list/product-category-list.component';
import { CategoryListComponent } from './components/pages/category/category-list/category-list.component';
import { ProductListComponent } from './components/pages/product/product-list/product-list.component';
import { ProductInputListComponent } from './components/pages/product-input/product-input-list/product-input-list.component';
import { UserListComponent } from './components/pages/user/user-list/user-list.component';
import { UserProfileComponent } from './components/pages/user-profile/user-profile.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'products/:product/categories/list', component: ProductCategoryListComponent },
    { path: 'categories/list', component: CategoryListComponent, canActivate: [AuthGuard] },
    { path: 'users/list', component: UserListComponent, canActivate: [AuthGuard] },
    { path: 'products/list', component: ProductListComponent, canActivate: [AuthGuard] },
    { path: 'inputs/list', component: ProductInputListComponent, canActivate: [AuthGuard] },
    { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), //, {enableTracing: true}
  ],
  declarations: [],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard
  ]
})
export class AppRoutingModule { }
