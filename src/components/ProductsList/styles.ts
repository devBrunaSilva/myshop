import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;

  max-width: 77.5rem;
  
  margin: 4rem auto;
  padding: 2rem;
  gap: 2rem;

  & > * {
    flex: 1 18.75rem;
  }
`;
