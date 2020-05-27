import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
    switch(action.type) {
        case types.CREATE_DEAL:
            return [...state, { ...action.deal}];
        default:
            return state;
    }
}