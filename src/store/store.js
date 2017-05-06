import thunk from '../middleware/thunk.js'
import RootReducer from '../reducers/root_reducer';
import { createStore, applyMiddleware } from 'redux';

const middlewares = [thunk];
if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
  middlewares.push(logger);
}

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  )
)

export default configureStore;
