import { fromJS } from 'immutable';

import * as ACTIONS from './constants';

const initialState = fromJS({
  selectProductList: undefined,
  selectAdicionable: undefined,
});

const datos = {
  productoLists: [
    {
    ID_producto: "393",
    nombre: "Pizza Nirvana Master Card",
    precio: "10.00",
    nodo_sugerido: "pizzas"
    },
    {
    ID_producto: "392",
    nombre: "Pizza Nirvana",
    precio: "12.50",
    nodo_sugerido: "pizzas"
    },
    {
    ID_producto: "391",
    nombre: "Salpresse",
    precio: "8.00",
    nodo_sugerido: "ensaladas"
    },
  ]
};

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