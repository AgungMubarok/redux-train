import {combineReducers} from 'redux';

import { angkutanReducer } from './angkutanReducer';
import { pasokanReducer } from './pasokan';

export const rootReducer = combineReducers({
    barang: angkutanReducer,
    pasokan:pasokanReducer
})