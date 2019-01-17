import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ModalComponent } from '../../../bootstrap/modal/modal.component';
import { HttpErrorResponse } from '@angular/common/http';
import { ProductInputHttpService } from '../../../../services/http/product-input-http.service';
import { ProductInput } from '../../../../model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import fieldsOptions from '../product-input-form/product-input-fields-options';

@Component({
  selector: 'product-input-new-modal',
  templateUrl: './product-input-new-modal.component.html',
  styleUrls: ['./product-input-new-modal.component.css']
})
export class ProductInputNewModalComponent implements OnInit {

  form: FormGroup;

  errors = {};

  @ViewChild(ModalComponent) modal: ModalComponent;

  @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
  @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();


  constructor(public productInputHttp: ProductInputHttpService, private formBuilder: FormBuilder) {

   // const maxlength = fieldsOptions.name.validationMessage.maxlength;

    this.form = this.formBuilder.group({
      product_id: [null, [Validators.required]],
      amount: ['', [Validators.required, Validators.min(fieldsOptions.amount.validationMessage.min)]]
    });

   }

  ngOnInit() {
  }

  submit() {

    this.productInputHttp
        .create(this.form.value)
        .subscribe(input => {
          this.form.reset({
            amount: '',
            product_id: null
          });
          this.onSuccess.emit(input);
          this.modal.hide();
        }, responseError => {

          if(responseError.status === 422) {
            this.errors = responseError.error.errors;
          }

          this.onError.emit(responseError);
        });

  }

  showModal() {
    this.errors = {};
    this.modal.show();
  }

  showErrors() {
    return Object.keys(this.errors).length != 0;
  }

  hideModal($event) {
    console.log($event);
  }

}
