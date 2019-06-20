import { combineReducers } from 'redux';
import persist, { IPersistState } from './persist';
import common, { ICommonState } from './common';

export default combineReducers({
    persist, common,
});

// 스토어의 상태 타입 정의
export interface StoreState {
    persist: IPersistState;
    common: ICommonState;
}
