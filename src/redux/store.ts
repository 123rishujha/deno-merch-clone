import { legacy_createStore,combineReducers,compose,applyMiddleware } from "redux";
import thunk from "redux-thunk";

import {reducer as productReducer} from './product/product.reducer';

import {TypedUseSelectorHook,useSelector,useDispatch} from 'react-redux';

import {reducer as cartReducer} from './cart/cart.reducer';

const rootReducer = combineReducers({
    productReducer,
    cartReducer,
});


export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

type DispatchFn = () => AppDispatch;
export const useAppDispatch: DispatchFn = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


