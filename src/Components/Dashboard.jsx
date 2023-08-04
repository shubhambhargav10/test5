import { Center,Input,InputLeftElement,InputGroup,Box , Button, Grid, Select} from "@chakra-ui/react";
import React ,{useState, useEffect} from "react";
import { SearchIcon } from '@chakra-ui/icons'
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { getProducts, addProduct,deleteProduct } from "../Redux/actionCreator";
import { useNavigate } from "react-router-dom";
import AllRoutes from "../AllRoutes/AllRoutes";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,useDisclosure,FormControl,FormLabel
  } from '@chakra-ui/react'

const Dashboard = ()=>{

    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        name:'',
        category:'',
        price:'',
        description:'',
        gender:'',
    })

    const handleChange = (e)=>{
        setProduct({...product,[e.target.name]:e.target.value})
    }

    const handleAdd = ()=>{
        dispatch(addProduct(product))
    }

    const handleDelete = (index)=>{
        dispatch(deleteProduct(index))
    }
    const handleEdit = ()=>{
        
    }

    const storeData = useSelector((store)=>{
        return store;
    })

    useEffect(()=>{   
        dispatch(getProducts(page));
    },[page])

        const { isOpen, onOpen, onClose } = useDisclosure()
        const initialRef = React.useRef(null)
        const finalRef = React.useRef(null)
    return <Box>
        
        <Center>
        <Grid templateColumns='repeat(5, 1fr)' gap={6}>
        <InputGroup>
            <InputLeftElement pointerEvents='none'>
            <SearchIcon color='gray.300' />
            </InputLeftElement>
            <Input type='text' placeholder='Search Any Product' />
        </InputGroup>

            <Select placeholder='Filter By Gender'>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
            </Select>

            <Select placeholder='Filter By Category'>
                <option value='male'>Shirts</option>
                <option value='jeans'>Jeans</option>
                <option value='trousers'>Trousers</option>
                <option value='suits'>Suits</option>
            </Select>

            <Select placeholder='Sort By Price'>
                <option value='asc'>Ascending</option>
                <option value='desc'>Descending</option>
            </Select>

            <Button onClick={onOpen}>ADD PRODUCT</Button>
            <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Add Your Custom Product</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel>Product Name</FormLabel>
                    <Input onChange={handleChange} name="name" value={product.name} ref={initialRef} placeholder='Product name' />
                  </FormControl>
      
                  <FormControl mt={4}>
                    <FormLabel>Product Price</FormLabel>
                    <Input onChange={handleChange} name="price" value={product.price} placeholder='Product Price' />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Product Category</FormLabel>
                    <Input onChange={handleChange} name="category" value={product.category} placeholder='Product Category' />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Product Description</FormLabel>
                    <Input onChange={handleChange} name="description" value={product.description} placeholder='Product Description' />
                  </FormControl>
                 
                  <FormControl mt={4}>
                    <FormLabel>Gender</FormLabel>
                    <Input onChange={handleChange} name="gender" value={product.gender} placeholder='Gender' />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Image</FormLabel>
                    <Input onChange={handleChange} name="image" value={product.image} placeholder='Image Link' />
                  </FormControl>

                </ModalBody>
      
                <ModalFooter>
                  <Button onClick={handleAdd} colorScheme='blue' mr={3}>
                    Save
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          
        </Grid>
        </Center>
        <Center>
        <table>
            <thead>
                <tr>
                <th>Image</th>
                <th>Product Name</th>
                <th>Product Description</th>
                <th>Gender</th>
                <th>Price</th>
                <th>Edit</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    storeData.products.map((ele,index)=>{
                        return <tr>
                            <td><img src={ele.image}/></td>
                            <td>{ele.name}</td>
                            <td>{ele.description}</td>
                            <td>{ele.gender}</td>""
                            <td>{ele.price}</td>
                            <td><button onClick={()=>handleEdit(index)}>Edit</button></td>
                            <td><button onClick={()=>handleDelete(index)}>Delete</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        </Center>
        <Center>
            <Button  onClick={()=>setPage(page-1)}>Prev</Button>
            <Button>{page}</Button>
            <Button onClick={()=>setPage(page+1)}>Next</Button>
        </Center>
    </Box>
       
   
}

export default Dashboard;