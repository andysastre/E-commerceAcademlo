import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom"
import "../style/productD.css"
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { getProductsThunk } from '../store/slices/products.slice';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { addCartThunk } from '../store/slices/cart.slice';

const ProductDetails = () => {

    const allProducts = useSelector(state => state.products.data?.products);
    const [productDetail, setProductDetail] = useState({});
    const [suggestedProducts, setSuggestedProducts] = useState([]);
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [ quantity, setQuantity] = useState("");

    useEffect(() => {
        const products = allProducts?.find(productItem => productItem.id === Number(id))
        setProductDetail(products);

        const filteredProducts = allProducts?.filter(productItem => productItem.category.id === products.category.id)
        setSuggestedProducts(filteredProducts);


    }, [allProducts, id])

    useEffect(() => {
        dispatch(getProductsThunk())

    }, [])

    const addToCart = () =>{
        const add={
            id: productDetail.id,
            quantity: quantity

        }
        dispatch(addCartThunk(add))
        
    }


    return (
        <section>
            <article className='Purchases_container'>

                <div className='Card_container'>
                    <div class="card_details">
                        <div>
                            <img src={productDetail?.productImgs?.[0]} alt="" className='card_img' />

                        </div>
                        <div className='details'>
                            <h3>{productDetail?.title}</h3>
                            <p>{productDetail.description}</p>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder="Quantity"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                   type="number"
                                    value={quantity}
                                    onChange={e=>setQuantity(e.target.value)}

                                />
                                <Button variant="outline-dark" id="button-addon2" onClick={addToCart}>
                                  Add
                                </Button>
                            </InputGroup>
                        </div>

                        <div className='price'>
                            <h3>{productDetail.price}$</h3>
                        </div>
                    </div>
                </div>
            </article>
            <article>
                <div className='Suggested_container'>
                    {
                        suggestedProducts.map(prod => (
                            <div className='Suggested_card' onClick={() => navigate(`/products/${prod.id}`)}>
                                <img src={prod?.productImgs?.[0]} alt="" className='Suggested_img' />
                                <p>{prod.title}</p>
                                <span class="badge rounded-pill bg-dark">{prod.price}$</span>
                            </div>
                        ))
                    }
                </div>
            </article>
        </section>

    );
};

export default ProductDetails;