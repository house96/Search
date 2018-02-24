import { combineReducers } from 'redux'
import artists from './artistReducer'

const rootReducer = combineReducers({ artists })

export default rootReducer
