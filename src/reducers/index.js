import { combineReducers } from 'redux';
import favReducer from "./favoritesReducer"
import movieReducer from './movieReducer';

const rootReducer = combineReducers({
    movieReducer,
    favReducer
})
export default rootReducer;