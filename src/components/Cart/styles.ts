import styled from "styled-components";

interface ContainerProps {
  showCart: boolean;
}

export const Container = styled.aside<ContainerProps>`
  position: fixed;
  top: 0;
  right: ${(props) => (props.showCart ? "0" : "-21.875rem")};
  transition: right 0.5s;
  width: 21.875rem;
  height: 100vh;
  background-color: white;
  padding: 2rem;
  box-shadow: -0.3125rem 0 0.9375rem rgba(0, 0, 0, 0.25);
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-bottom: 1.2rem;
`;

export const Title = styled.h1``;

export const CartProductsList = styled.ul`
  padding: 2rem 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CartProductItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  min-height: 7rem; 
`;

export const ProductImage = styled.img`
  width: 4rem;
  height: 4rem; 
  object-fit: contain;
`;

export const ProductInfo = styled.div`
  flex: 1;
  display: flex; 
  flex-direction: column; 
  justify-content: space-between; 
`;

export const CartTitle = styled.strong`
  word-wrap: break-word; 
`;

export const ProductPrice = styled.span`
  font-size: 0.875rem;
  align-self: flex-end; 
`;

export const ButtonRemove = styled.button`
  text-decoration: none;
  background-color: white;
  border: none;
  cursor: pointer;
  size: 2rem;
  font-size: 1.25rem;
`;

export const CartTotal = styled.strong``;
