import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Product from '../Product/Product';

import "@splidejs/react-splide/css";

const AllProducts = () => {
    const [products, setProducts] = useState();

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await (await fetch('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json')).json();
                setProducts(response.products);
            } catch (error) {
                console.error(error);
            }
        }

        fetchProducts();
    }, []);

    return (
        <div>
            {products ? (
                <Splide aria-label="Products" options={{
                    gap: '4rem',
                    type: 'loop',
                    perPage: 4,
                    pagination: false
                }}>
                    {products.map((product, index) => (
                        <SplideSlide key={index}>
                            <Product name={product.productName} photoURL={product.photo} price={product.price} />
                        </SplideSlide>
                    ))}
                </Splide>
            ) : (
                <div>Carregando produtos ...</div>
            )}
        </div>
    );
};

export default AllProducts;
