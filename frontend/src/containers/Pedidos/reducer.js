import { fromJS } from 'immutable';

import * as ACTIONS from './constants';

import { readProduct } from '../../API';

const initialState = fromJS({
  selectProductList: undefined,
  selectAdicionable: undefined,
});

const datos = readProduct();

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.SELECT_PRODUCT_LISTS: {
      return state.set(
        'selectProductList',
        datos
      );
    }
    default:
      return state;
  }
}