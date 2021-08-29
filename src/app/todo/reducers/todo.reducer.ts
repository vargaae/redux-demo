import { TodoItem } from '../models/todo-item';
// import { createReducer, on } from '@ngrx/store';
import { TodoActionTypes, TodoAction } from '../actions/todo.actions';
import { reset } from '../actions/todo.actions';
import { createReducer, on } from '@ngrx/store';

export interface TodoAppState {
  todos: Array<TodoItem>;
  lastUpdate: Date;
}

// const initialState: TodoAppState = {
//   todos: [{
//         id: "1775935f-36fd-467e-a667-09f95b917f6d",
//         title: 'Study Angular',
//         lastUpdate: '2021. 08. 20. 15:15:05'
//       }],
//   lastUpdate: null
// };
const initialState: Array<TodoItem> = [
  {
    id: "1775935f-36fd-467e-a667-09f95b917f6d",
    title: 'Study Angular',
    lastUpdate: '2021. 08. 20. 15:15:05'
  }
]

// {
  // todos: [],
  // lastUpdate: null
// }

function addTodo(state, action) {
  return [...state, action.payload];
      // lastUpdate: new Date(),
}

function resetTodos(state, action) {
  return {
    ...state,
    todos: [{}] 
};
}

// // SHORTER NEWER WAY OF NGRX:
// // reset is qorking and started to work on the add-remove-toggle actions 2021-08-29

// const _todoReducer = createReducer(
//   initialState,
//   // on(addtodo, (state) => [...state]),
//   // on(TodoActionTypes.ADD_TODO, (state) => [...state, action.payload]),
//   //  {
//   //   // Instead of the push() method, we use the concat() method because the former mutates
//   //   // the original array, whereas the latter returns a new array.
//   //   todos: state.todos.concat({ id: state.todos.length + 1, title: action.title }),
//   //   lastUpdate: new Date()
//   // }),
//   // on(todoActions.removeTodo, (state) => state - 1),
//   on(reset, (state) => [])
//   // on(todoActions.getTodos, (state) => 0)
//   // on(todoActions.toggleTodo, (state) => 0)
// );

// export function TodoDashboardReducer(state, action) {
//   return _todoReducer(state, action);
// }

export function TodoReducer(
  state: Array<TodoItem> = initialState, 
    // state: TodoAppState = initialState, 
    action: TodoAction
    ) {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO: return addTodo(state, action);

    case TodoActionTypes.REMOVE_TODO:
      return state.filter(item => item.id !== action.payload);
      // lastUpdate: new Date(),

      case TodoActionTypes.CLEAR_TODOS: return resetTodos(state, action);


    // case TodoActionTypes.TOGGLE_TODO:
    //   // When modifying an item in an array, we should create a new array, and copy
    //   // all other item from the source array (except the item to be modified). At the same time
    //   // we should create a copy of the item to be modified and apply the mutations using tassing.

    //   // So, first we need to find the item to be modified. Here, we are finding it by it's id.
    //   var todo = state.find(item => item.id === action.payload);

    //   // Now, we need to find the position of this item in the array.
    //   var index = state.indexOf(todo);

    //   return
    //   on(state, {
    //     todos: [
    //       // Using the slice() method, we can slice an array. This method does not mutate the
    //       // original array, and returns a new array. So here, we're getting all the items from
    //       // the beginning to the index of the item we're going to modiy.
    //       //
    //       // We use the spread operator (...) to enumerate an array. This is a clean way to
    //       // concat two arrays. Instead of
    //       //
    //       // var newArray = [];
    //       // newArray.concat(sourceArray1).concat(sourceArray2);
    //       //
    //       // We can write:
    //       //
    //       // var newArray = [...sourceArray1, ...sourceArray2];
    //       ...state.todos.slice(0, index),

    //       // So, we have copied all the items before the item to be modified. Now, we take a copy
    //       // of this item and apply the mutation (isCompleted).
    //       on(todo, { isCompleted: !todo.isCompleted }),

    //       // Now, we need to copy all the items after this item. Again, we use the slice() method
    //       // to get all the items following that item, and use the spread operator to enumerate
    //       // them and put them in our target array.
    //       ...state.slice(index + 1),
    //     ],
    //     lastUpdate: new Date()
    // });

    default:
      return state;
  }
}