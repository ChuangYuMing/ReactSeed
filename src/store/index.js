import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import reducers from '../reducers'
import appGlobal from 'modules/common/app-global.js'
import rootEpic from '../epics.js'

// const apiUrl = appGlobal.apiUrl
let something = ''
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['app']
}
const persistedReducer = persistReducer(persistConfig, reducers)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const epicMiddleware = createEpicMiddleware(rootEpic)

const store = createStore(
  persistedReducer,
  composeEnhancers(
    applyMiddleware(thunk.withExtraArgument(something), epicMiddleware)
  )
)
const persistor = persistStore(store)

export { store, persistor }
