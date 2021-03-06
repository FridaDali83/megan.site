import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from '../reducers'

export const initStore = initialState => createStore(
  reducers,
  initialState,
  composeWithDevTools(),
)