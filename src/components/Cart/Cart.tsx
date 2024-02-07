import React from "react";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import { removeProduct } from "../../redux/Cart/cart-slice";

interface CartProps {
  showCart: boolean;
  onCloseCart: () => void;
}

export const Cart: React.FC<CartProps> = ({ showCart, onCloseCart }) => {
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );

  const total = cart.reduce((totalCart, product) => {
    return totalCart + product.price;
  }, 0);

  const dispatch = useDispatch();

  return (
    <S.Container showCart={showCart}>
      <S.BackButton onClick={onCloseCart}>
        <IoIosArrowForward size={24} />
      </S.BackButton>
      <S.Title>Carrinho</S.Title>

      <S.CartProductsList>
        {cart.map((product) => (
          <S.CartProductItem key={product.id}>
            <S.ProductImage src={product.image} alt={product.description} />
            <S.ProductInfo>
              <S.CartTitle>{product.title}</S.CartTitle>
              <S.ProductPrice>R$ {product.price}</S.ProductPrice>
            </S.ProductInfo>
            <S.ButtonRemove
              onClick={() => dispatch(removeProduct(product))}
            >
              <AiOutlineDelete />
            </S.ButtonRemove>
          </S.CartProductItem>
        ))}
      </S.CartProductsList>

      <S.CartTotal>Total: R$ {total}</S.CartTotal>
    </S.Container>
  );
};
