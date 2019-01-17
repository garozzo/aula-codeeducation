import { FieldsOptions } from '../../../../commom/fields-options';

const fieldsOptions: FieldsOptions = {
  product_id: {
    id: 'product_id',
    label: 'Produto'
  },
  amount: {
        id: 'amount',
        label: 'Quantidade',
        validationMessage: {
          min: 1
        }
      }
};

export default fieldsOptions;
