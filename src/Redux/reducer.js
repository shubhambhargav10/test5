import { store } from "./store"
import { LOADING, ERROR,GETPRODUCTS, ADDPRODUCT, DELETEPRODUCT } from "./actionTypes";



const initData = {
   products:[],
   isLoading:false,
   isError:false
}

export const reducer = (store=initData, action)=>{
    switch(action.type) {
        case LOADING : {
            return {
                ...store,isLoading:true
            }
        }
        case GETPRODUCTS : {
            return {
                ...store, isLoading:false, isError:false,
                products:action.payload
            }
        }
        case ERROR : {
            return {
                ...store, isLoading:false, isError:true
            }     
        }
        case ADDPRODUCT : {
            return {
                ...store, isLoading :false, isError:false,
                products:[...store.products,action.payload]
            }
        }
        case DELETEPRODUCT : {
            return {
                ...store, isLoading :false, isError:false,
                products:[...store.products]
            }
        }

        default : return store;
    }
}