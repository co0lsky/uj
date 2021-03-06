import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    dummy: require('./DummyDataRedux').reducer,
    nav: require('./NavigationRedux').reducer,
    github: require('./GithubRedux').reducer,
    search: require('./SearchRedux').reducer,
    user: require('./UserRedux').reducer,
    wordpress: require('./WordpressRedux').reducer
  })

  return configureStore(rootReducer, rootSaga)
}
