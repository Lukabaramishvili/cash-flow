import { combineReducers } from 'redux';
import deals from './dealReducer';

const rootReducer = combineReducers({
    deals: deals
});

export default rootReducer;