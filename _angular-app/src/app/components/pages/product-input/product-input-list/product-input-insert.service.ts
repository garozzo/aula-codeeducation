import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NotifyMessageService } from '../../../../services/notify-message.service';
import { ProductInputListComponent } from './product-input-list.component';

@Injectable({
  providedIn: 'root'
})
export class ProductInputInsertService {

  private _productInputListComponent: ProductInputListComponent;

  constructor(private notifyMessage: NotifyMessageService) {}

  set productInputListComponent(value: ProductInputListComponent) {
    this._productInputListComponent = value;
  }

  showModalInsert() {
    this._productInputListComponent.productInputNewModal.showModal();
  }

  onInsertSuccess($event: any) {
  //  this.notifyMessage.success('Categoria cadastrada com sucesso!');
  //  this._categoryListComponent.getCategories();
  }

  onInsertError($event: HttpErrorResponse) {
    console.log($event);
  }





}
