import { ShoppingItem } from './../models/shopping-item.model';
import { ShoppingAction, ShoppingActionTypes } from '../actions/shopping.actions';

// export type Action = PostActions.All;

/// Default app state
const initialState: Array<ShoppingItem> = [{
  id: '1775935f-36fd-467e-a667-09f95b917f6d',
  name: 'Bread',
  // todos: [],
  // lastUpdate: null
},
{
  id: '1775935f-36fd-467e-a667-09f95b917f6f',
  name: 'Milk',
}
];

/// Helper function to create new state object
// const newState = (state, newData) => {
//   return Object.assign({}, state, newData)
// }


/// Reducer function
export function ShoppingReducer(state: Array<ShoppingItem> = initialState, action: ShoppingAction) {

  console.log(action.type, state)

	switch (action.type) {
    case ShoppingActionTypes.ADD_ITEM:
      console.log(action.type, action.payload);
      return [...state, action.payload];

    case ShoppingActionTypes.REMOVE_ITEM:
      console.log(action.type, action.payload);
      return state.filter(item => item.id !== action.payload);
    //   case ShoppingActionTypes.ADD_TODO:
      // return newState(state, { todos: state.todos.concat({ id: state.todos.length + 1, title: action.payload }),
      // lastUpdate: new Date() });

  		// case ShoppingActionTypes.EDIT_TEXT:
  		// 	return newState(state, { text: action.payload });

  		// case ShoppingActionTypes.RESET:
  		// 	return defaultState;

  		default:
  			return state;

	}
}
