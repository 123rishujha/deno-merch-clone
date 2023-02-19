import * as types from './product.types';

import { Product } from "@/utils/types";

interface ProductState{
    loading: boolean;
    error: boolean;
    product: Product[];
}

interface ProductAction{
    type: string;
    payload?: any;
}


const initialState: ProductState = {
    loading: false,
    error: false,
    product: [],
}

export const reducer = (state:ProductState=initialState,{type,payload}:ProductAction) =>{
    switch(type){

        case types.PRODUCTS_LOADING : {
            return {...state,loading:true,error:false};
        }

        case types.PRODUCTS_ERROR : {
            return {...state,loading:false,error:true};
        }

        case types.GET_PRODUCT : {
            return {
                ...state,
                loading: false,
                error: false,
                product : payload
            };
        }

        default : {
            return state;
        }
    }
}