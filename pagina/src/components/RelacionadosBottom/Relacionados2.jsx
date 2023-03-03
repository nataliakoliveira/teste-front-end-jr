import React from "react";
import ProductCarousel from "../Relacionados/AllProducts";
import './Relacionados2.css';

const RelatedProducts = () => {
return (
<div>
<div className='related-products-container'>
<div className='related-products-header'>
<h1 className='related-products-title'>Produtos Relacionados</h1>
<span className='related-products-view-all'>Ver todos</span>
</div>
<div className='related-products-carousel'>
<ProductCarousel />
</div>
</div>
</div>
);
};

export default RelatedProducts;