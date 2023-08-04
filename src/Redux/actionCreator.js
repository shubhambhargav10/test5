import axios from "axios"
import { ERROR, GETPRODUCTS, LOADING ,ADDPRODUCT, DELETEPRODUCT} from "./actionTypes"


const loadingAction  = () => {
    return {
        type: LOADING
    }
}
const errorAction = ()=>{
    return {
        type: ERROR
    }
}
const getProductsAction = (data) => {
    return {
        type:GETPRODUCTS,
        payload : data
    }
}
const addProductAction = (data) => {
    return {
        type:ADDPRODUCT,
        payload : data
    }
}
const deleteProductAction = (data) => {
    return {
        type:DELETEPRODUCT,
        payload : data
    }
}

const getProducts = (page)=> {
    return (dispatch) =>{
        dispatch(loadingAction)
        axios.get(`http://localhost:8080/products?_page=${page}&_limit=10`)
        .then((res)=>{
            dispatch(getProductsAction(res.data))
        }).catch((err)=>{
            dispatch(errorAction)
        })
    }
}

const addProduct = (product)=>{
    return (dispatch) =>{
    dispatch(loadingAction)  
    axios.post(`http://localhost:8080/products`,product)
        .then((res)=>{
            alert ('product added ');
            dispatch(addProductAction)
        }).catch((err)=>{
            dispatch(errorAction)
        })
    }
}

const deleteProduct = (index)=>{
    return (dispatch) =>{
    dispatch(loadingAction)  
    axios.delete(`http://localhost:8080/products/${index}`)
        .then((res)=>{
            alert ('product deleted ');
            dispatch(deleteProductAction)
        }).catch((err)=>{
            dispatch(errorAction)
        })
    }
}

export {getProducts, addProduct,deleteProduct}