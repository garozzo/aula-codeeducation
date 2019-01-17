import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NotifyMessageService } from '../../../../services/notify-message.service';
import { CategoryListComponent } from './category-list.component';

@Injectable({
  providedIn: 'root'
})
export class CategoryDeleteService {

  private _categoryListComponent: CategoryListComponent;

  constructor(private notifyMessage: NotifyMessageService) {}

  set categoryListComponent(value: CategoryListComponent) {
    this._categoryListComponent = value;
  }

  showModalDelete(categoryId: number)
  {
    this._categoryListComponent.categoryId = categoryId;
    this._categoryListComponent.categoryDeleteModal.showModal();
  }

  onDeleteSuccess($event: any)
  {
    this._categoryListComponent.getCategories();
  }

  onDeleteError($event: HttpErrorResponse)
  {
    //console.log($event);
    this.notifyMessage.error('Não foi possível excluir a categoria! Verifique se não tem relação com produtos.');
    this._categoryListComponent.categoryDeleteModal.hideModal($event);
  }

}
