import styled from "styled-components";

interface ContainerProps {
  showCart: boolean;
}

export const Container = styled.aside<ContainerProps>`
  position: fixed;
  top: 0;
  right: ${(props) => props.showCart ? '0' : '-21.875rem'};
  transition: right .5fs;
  width: 21.875rem;
  height: 100vw;
  background-color: white;
  padding: 2rem;
  box-shadow: -0.3125rem 0 .9375rem rgba(0, 0, 0, 0.25);
`;

export const Title = styled.h1``

export const CartProductsList = styled.ul`
  padding: 2rem 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CartProductItem = styled.li`
`;

export const CartTitle = styled.strong`

`;
export const ButtonRemove = styled.button`
  text-decoration: none;
  background-color: white;
  border: none;
  padding: 0;
  cursor: pointer;
  size: 2rem;
  font-size: 1.25rem;
  
`;

export const CartTotal = styled.strong`

`;

