import thunk from '../middleware/thunk.js'
import RootReducer from '../reducers/root_reducer';
import { createStore, applyMiddleware } from 'redux';

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(thunk)
  )
)

export default configureStore;
