import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProdcutListComponent } from './products-list.component';
import { ProductDetailGuardGuard } from './product-detail-guard.guard';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpaces } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/star.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProdcutListComponent,
    ConvertToSpaces,
    ProductDetailComponent
  ],
  imports: [
    RouterModule.forChild([{
      path:'products', component:ProdcutListComponent
    }
      ,{
        path:'products/:id',canActivate:[ProductDetailGuardGuard], component:ProductDetailComponent
      }
    ]),
    SharedModule
  ]
})
export class ProductModule { }
