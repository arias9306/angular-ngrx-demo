import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ProductsRoutingModule, SharedModule],
})
export class ProductsModule {}
