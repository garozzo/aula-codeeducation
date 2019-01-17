import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { User } from '../../../../model';
import { FormGroup } from '@angular/forms';
import fieldsOptions from './user-fields-options';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Input()
  form: FormGroup;

  constructor(private changeRef: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.changeRef.detectChanges();
  }

  get fieldsOptions() {
    return fieldsOptions;
  /*
    return {
      name: {
        id: 'name',
        label: 'Nome',
        validationMessage: {
          maxlength: 255
        }
      },
      active: {
        id: 'active',
        label: 'Ativo'
      }
    }
    */
  }

}
