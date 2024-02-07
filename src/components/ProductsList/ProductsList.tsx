import React, { useEffect, useState } from "react";
import * as S from "./styles";
import axios from "axios";
import { ProductCard } from "../ProductCard/ProductCard";
import { Cart } from "../Cart/Cart";


export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  }
}

export const ProductsList: React.FC = () => {

  const [products, setProducts] =  useState([] as Product[]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await axios.get('http://fakestoreapi.com/products')

        const productsData = response.data
        setProducts(productsData)
  
      } catch (error) {
        console.error("Erro na requisição",error)
      }
    }

    loadProducts()
  }, [])

  return (
    <S.Container>
      {showCart && <Cart showCart={showCart} onCloseCart={() => setShowCart(false)} />}
      
      {products.map((prod) => {
        return (
          <ProductCard
            key={prod.id}
            product={prod}
            setShowCart={setShowCart}
          />
        );
      })}
    </S.Container>
  );
}