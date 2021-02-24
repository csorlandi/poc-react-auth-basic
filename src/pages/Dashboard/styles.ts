import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.black};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img``;

export const Button = styled.button`
  margin-top: 3rem;
  border: 0;
  padding: 0.75rem 2rem;
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 1rem;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-size: 1.125rem;

  &:hover {
    transform: scale(1.01);
  }

  &:active {
    transform: scale(0.99);
  }
`;
