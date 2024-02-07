import React from "react";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import { RiDeleteBin5Line } from "react-icons/ri";
import { removeProduct } from "../../redux/Cart/cart-slice";

interface CartProps {
  showCart: boolean;
}

export const Cart: React.FC<CartProps>= ({
  showCart
}) => {

  const { cart } = useSelector((rootReducer: RootReducer) => rootReducer.cartReducer)

  const total = cart.reduce((totalCart, product) => {
    return totalCart + product.price
  }, 0)

  const dispatch = useDispatch()


  return (
    <S.Container showCart={showCart}>
      <S.Title>Carrinho</S.Title>

      <S.CartProductsList>
        {cart.map(product => (
          <S.CartProductItem key={product.id}>
            <S.CartTitle>{product.title}</S.CartTitle> - {product.price}

            <S.ButtonRemove
              onClick={() => 
                dispatch(removeProduct(product))
              }
            >
              <RiDeleteBin5Line />
            </S.ButtonRemove>
          </S.CartProductItem>
        ))}
      </S.CartProductsList>

      <S.CartTotal>
        Total: R$ {total}
      </S.CartTotal>

    </S.Container>
  )
}