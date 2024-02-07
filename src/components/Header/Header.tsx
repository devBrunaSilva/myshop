import React, { useState } from "react";
import { Cart } from "../Cart/Cart";
import { FiLogIn, FiLogOut, FiShoppingCart } from 'react-icons/fi'
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";

import * as S from "./styles";
import { login, logout } from "../../redux/User/user-slice";


export const Header: React.FC = () => {

  const { user } = useSelector((rootReducer: RootReducer) => rootReducer.userReducer)

  const dispatch = useDispatch()

  const [showCart, setShowCart] = useState(false)

  const isLogged =  user !== null

  function handleUserAuth() {
    if(user === null) {
      //despachar action de login
      dispatch(login({
        name: 'Bruna Silva',
        email: 'falecomsilvabruna@gmail.com'
      }))
    } else {
      dispatch(logout({}))
    }
  }

  function handleCloseCart() {
    setShowCart(false);
  }

  return(
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>MyShop.</S.HeaderTitle>

        <S.ButtonWrapper>
          <S.AuthButton 
            isLogged={isLogged}
            onClick={handleUserAuth}
          >
            {isLogged ? 'Logout' : 'Login'}
            {isLogged ? <FiLogOut /> :<FiLogIn />}
          </S.AuthButton>

          <S.CartButton
            onClick={() => {
              setShowCart(!showCart)
            }}
          >
            Carrinho
            <FiShoppingCart />
          </S.CartButton>
        </S.ButtonWrapper>
      </S.Wrapper>

      <Cart showCart={showCart} onCloseCart={handleCloseCart} />
      {/* {showCart && (
      )} */}
    </S.StyledHeader>
  )
}