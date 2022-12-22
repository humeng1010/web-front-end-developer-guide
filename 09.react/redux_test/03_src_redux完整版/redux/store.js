import { legacy_createStore } from 'redux'

import countReducer from './count_reducer'

export default legacy_createStore(countReducer)