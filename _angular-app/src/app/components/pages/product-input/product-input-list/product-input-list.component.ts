import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductInputNewModalComponent } from '../product-input-new-modal/product-input-new-modal.component';
//import { ProductEditModalComponent } from '../product-edit-modal/product-edit-modal.component';
//import { ProductDeleteModalComponent } from '../product-delete-modal/product-delete-modal.component';
import { ProductInputHttpService } from '../../../../services/http/product-input-http.service';
import { ProductInput } from '../../../../model';
import { ProductInputInsertService } from './product-input-insert.service';
//import { ProductEditService } from './product-edit.service';
//import { ProductDeleteService } from './product-delete.service';

@Component({
  selector: 'product-input-list',
  templateUrl: './product-input-list.component.html',
  styleUrls: ['./product-input-list.component.css']
})
export class ProductInputListComponent implements OnInit {

  inputs: Array<ProductInput> = [];

  pagination = {
    page: 1,
    totalItems: 0,
    itemsPerPage: 10
  }

  sortColumn = {column: '', sort: ''};

  @ViewChild(ProductInputNewModalComponent)
  productInputNewModal: ProductInputNewModalComponent;

 // @ViewChild(ProductEditModalComponent)
 // productEditModal: ProductEditModalComponent;

 // @ViewChild(ProductDeleteModalComponent)
 // productDeleteModal: ProductDeleteModalComponent;

  searchText: string;

  constructor(private inputHttp: ProductInputHttpService,
              protected productInputInsertService: ProductInputInsertService//,
             // protected productEditService: ProductEditService,
             // protected productDeleteService: ProductDeleteService
              ) {

    this.productInputInsertService.productInputListComponent = this;
  //  this.productEditService.productListComponent = this;
  //  this.productDeleteService.productListComponent = this;

  }

  ngOnInit() {
    this.getInputs();
  }

  getInputs() {
     this.inputHttp.list({
        page: this.pagination.page,
        sort: this.sortColumn.column === '' ? null : this.sortColumn,
        search: this.searchText
      })
      .subscribe(response => {
        this.inputs = response.data;
        this.pagination.totalItems = response.meta.total;
        this.pagination.itemsPerPage = response.meta.per_page;
      });
  }

  pageChanged(page) {
    this.pagination.page = page;
    this.getInputs();
  }

  sort(sortColumn) {
    this.getInputs();
  }

  search(search) {
    this.searchText = search;
    this.getInputs();
  }

}
