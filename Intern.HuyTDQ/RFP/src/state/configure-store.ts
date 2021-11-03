import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducer';
import rootSaga from './saga';
export function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = compose;
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
