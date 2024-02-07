import styled from "styled-components";

export const Card = styled.article`
  background-color: white;
  width: 100%;
  padding: 2rem;
  margin: 0 auto;
  border-radius: .625rem;
  box-shadow: 0 0 .3125rem rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const ProductImage = styled.img`
  width: 15.625rem;
  height: 25rem;

  object-fit: contain;
`;

export const ProductTitle = styled.h2`
  font-weight: 500;
  font-size: 1.2rem;
  margin-top: 1rem;

  min-height: 3rem;
`;

export const ReviewPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;

export const Review = styled.span`
  display: flex;
  font-size: 0%.75rem;

  svg{
    font-size: 1rem;
  }
`;

export const Price = styled.strong`

`;

export const AddToCardButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;


export const AddToCartButton = styled.button`
  border: none;
  border-radius: .3125rem;
  height: 2.5rem;
  width: 100%;
  background-color: #800020;
  color: white;  
  font-size: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .3rem;

  svg {
    font-size: 0.7rem;
  }
`;

export const RemoveFromCartButton = styled.button`
  border: none;
  border-radius: .3125rem;
  height: 2.5rem;
  width: 100%;
  background-color: #2C3E50;
  color: white;  
  font-size: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .3rem;

  svg {
    font-size: 0.7rem;
  }
`;