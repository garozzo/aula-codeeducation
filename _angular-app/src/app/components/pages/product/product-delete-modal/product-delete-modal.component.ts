import { Component, EventEmitter, Input, Output, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../../../bootstrap/modal/modal.component';
import { HttpErrorResponse } from '@angular/common/http';
import { ProductHttpService } from '../../../../services/http/product-http.service';
import { Product } from '../../../../model';

@Component({
  selector: 'product-delete-modal',
  templateUrl: './product-delete-modal.component.html',
  styleUrls: ['./product-delete-modal.component.css']
})
export class ProductDeleteModalComponent implements OnInit {

  product: Product = null;

  _productId: number;

  @ViewChild(ModalComponent) modal: ModalComponent;

  @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
  @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

  constructor(public productHttp: ProductHttpService) { }

  ngOnInit() {

  }

  @Input()
  set productId(value)
  {
    this._productId = value;

    if(this._productId) {
      this.productHttp.get(this._productId)
        .subscribe(product => this.product = product);
    }
  }

  destroy() {
    this.productHttp.destroy(this._productId)
        .subscribe(product => {
           this.onSuccess.emit(product);
           this.modal.hide();
        }, error => this.onError.emit(error));
  }

  showModal() {
    this.modal.show();
  }

  hideModal($event) {
    console.log($event);
    this.modal.hide();
  }

}
