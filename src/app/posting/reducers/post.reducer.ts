import * as PostActions from '../actions/post.actions';
import { Post } from '../models/post.model';

export type Action = PostActions.All;

/// Default app state
// const defaultState: Post = {
//   text: 'Hello. I am the default post',
//   likes: 0,
//   // todos: [],
//   // lastUpdate: null
// };

/// Helper function to create new state object
const newState = (state, newData) => {
  return Object.assign({}, state, newData);
};

/// Reducer function
export function postReducer(state: Post, action: Action): Post {
  // export function postReducer(state: Post = defaultState, action: Action): Post {
  console.log(action.type, state);

  switch (action.type) {
    // case PostActions.ADD_TODO:
    //   return [...state, action.payload];
    // return newState(state, { todos: state.todos.concat({ id: state.todos.length + 1, title: action.payload }),
    // lastUpdate: new Date() });

    case PostActions.GET_POST:
      console.log(action.type, action.payload);
      return { ...state, loading: true };

    case PostActions.GET_POST_SUCCESS:
      console.log(action.type, action.payload);
      return { ...state, ...action.payload, loading: false };

    case PostActions.VOTES_UPDATE:
      console.log(action.type, action.payload);
      return { ...state, ...action.payload, loading: true };

    case PostActions.VOTES_UPDATE_SUCCESS:
      console.log(action.type, action.payload);
      return { ...state, loading: false };

    case PostActions.VOTES_UPDATE_FAIL:
      console.log(action.type, action.payload);
      return { ...state, ...action.payload, loading: false };

    case PostActions.EDIT_TEXT:
      return newState(state, { text: action.payload });

    case PostActions.UPVOTE:
      return newState(state, { likes: state.likes + 1 });

    case PostActions.DOWNVOTE:
      return newState(state, { likes: state.likes - 1 });

    // case PostActions.RESET:
    //   return defaultState;

    default:
      return state;
  }
}
