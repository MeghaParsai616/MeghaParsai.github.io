import { createStore, applyMiddleware, compose} from 'redux'
import rootReducer from '../store/reducer/RootReducer'
import thunk from 'redux-thunk'

export default function configureStore(initialState = {}) {
  const composeEnhancers=  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(thunk))
  )
  }
  

