import * as types from './actionTypes';

export function createDeal(deal) {
    return { type: types.CREATE_DEAL, deal: deal};
}