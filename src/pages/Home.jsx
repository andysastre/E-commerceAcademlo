import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilterCategoryThunk, FilterProductsThunk, getProductsThunk } from '../store/slices/products.slice';
import "../style/Home.css"
import { Carousel } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';


const Home = () => {



    const dispatch = useDispatch();
    const navigate = useNavigate();
    const products = useSelector(state => state.products.data?.products)
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        dispatch(getProductsThunk());

        axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products/categories")
            .then(res => setCategories(res.data.data.categories))
    }, [])

    

    return (
        <article className='Home_article'>
            <h1>Home</h1>

            <div className='categories'>
                <ListGroup horizontal >
                    {
                        categories.map(category => (
                            <ListGroup.Item variant="dark" key={category.id} 
                            onClick={ () =>dispatch(FilterCategoryThunk(category.id))}>
                                {category.name}
                            </ListGroup.Item>


                        ))
                    }

                </ListGroup>
            </div>

            <div className='Home_cards'>
                {
                    products?.map(product => (
                        <div className="card" key={product.id} >
                            <div className="card-image">
                                <Carousel variant='dark' >
                                    <Carousel.Item className="Carousel_img">
                                        <img src={product.productImgs?.[1]} className="Car_img" ></img>
                                    </Carousel.Item>
                                    <Carousel.Item className="Carousel_img">
                                        <img src={product.productImgs?.[2]} className="Car_img"></img>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                            <div className="category" onClick={() => navigate(`/products/${product.id}`)} > {product.category.name} </div>
                            <div className="heading" onClick={() => navigate(`/products/${product.id}`)}> {product.title}
                                <div className="author"><span className="name">{product.price}$</span></div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </article>
    );
};

export default Home;




