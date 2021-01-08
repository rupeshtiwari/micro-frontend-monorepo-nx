import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

// sales project
import {SharedLoggerModule} from '@myorg/shared/logger';

// Sales project can not depend on Customers project
import {CustomersUserEditorModule} from '@myorg/customers-user-editor';

// Sales project can depend on other sales project
import {SalesProductEditorModule} from '@myorg/sales-product-editor';

@NgModule({
  imports: [CommonModule],
  declarations: [ProductListComponent],
  exports: [ProductListComponent],
})
export class SalesProductsModule {}
