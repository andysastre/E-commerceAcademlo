import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPurchasesThunk } from '../store/slices/purchases.slice';
import "../style/Purchases.css"

const Purchases = () => {
   const purchases = useSelector(state => state?.purchases.data?.purchases)
   const dispatch = useDispatch()
   console.log(purchases)
   
useEffect(() => {
    dispatch(getPurchasesThunk());

  },[])

  

 

    return (
       <section>

        <article className='Purchases_Container'>
           
        <div >
            {
                purchases?.map(purchaded => (
                    <div class="card_purchases shadow" key={purchaded.id}>
                        <h2>{purchaded.cart.products[0]?.title}</h2>
                        <p>{purchaded.cart.products[0]?.price}$</p>
                    </div>
                ))
            }
        </div>

        </article>

       </section>
    );
};

export default Purchases;