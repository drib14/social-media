import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import {thunk} from 'redux-thunk'
import rootReducer from './reducers/index';

// Use the compose function from Redux to enhance store functionality
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const DataProvider = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

export default DataProvider;
