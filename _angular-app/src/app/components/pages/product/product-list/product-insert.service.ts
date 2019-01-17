import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NotifyMessageService } from '../../../../services/notify-message.service';
import { ProductListComponent } from './product-list.component';

@Injectable({
  providedIn: 'root'
})
export class ProductInsertService {

  private _productListComponent: ProductListComponent;

  constructor(private notifyMessage: NotifyMessageService) {}

  set productListComponent(value: ProductListComponent) {
    this._productListComponent = value;
  }

  showModalInsert() {
    this._productListComponent.productNewModal.showModal();
  }

  onInsertSuccess($event: any) {
    this.notifyMessage.success('Produto cadastrado com sucesso!');
    this._productListComponent.getProducts();
  }

  onInsertError($event: HttpErrorResponse) {
    console.log($event);
  }

}
