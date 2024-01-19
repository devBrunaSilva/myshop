import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: navy;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 77.5rem;
  margin: 0 auto;
  padding: 0 2rem;
  height: 4.5rem;
`;

export const HeaderTitle = styled.h1`
  font-size: 1.6;
  font-weight: 400;
  color: #ffffff;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const AuthButton = styled.button`
  border: none;
  border-radius: .3125rem;
  height: 1.875rem;
  padding: 0 1rem;
  background-color: green;
  color: white;  
  font-size: 0.75rem;

  display: flex;
  align-items: center;
  gap: .3rem;

  svg {
    font-size: 0.7rem;
  }
`;

export const CartButton = styled.button`
 border: none;
  border-radius: .3125rem;
  height: 1.875rem;
  padding: 0 1rem;
  background-color: violet;
  color: black;  
  font-size: 0.75rem;

  display: flex;
  align-items: center;
  gap: .3rem;

  svg {
    font-size: 0.7rem;
  }
`;