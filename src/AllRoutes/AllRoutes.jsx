import {Routes, Route} from 'react-router-dom';
import AddProduct from '../Components/AddProduct'

const AllRoutes = ()=>{
    return <Routes>
        <Route path="/addproducts" element = {<AddProduct/>}/>
    </Routes>
}

export default AllRoutes