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

export const Content = styled.main`
  width: 514px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 1.5rem;
  padding: 2rem;
`;

export const Logo = styled.img`
  margin: 1rem 0 3rem 0;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 2.375rem;
  font-family: 'Raleway', sans-serif;
  color: ${({ theme }) => theme.colors.black};
`;

export const Description = styled.span`
  display: block;
  font-size: 0.875rem;
  font-family: 'Raleway', sans-serif;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  display: block;
  font-size: 1rem;
  font-family: 'Raleway', sans-serif;
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  border: 0;
  background: ${({ theme }) => theme.colors.inputBackground};
  padding: 10px;
  width: 100%;
  border-radius: 4px;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.black};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const Button = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  border: 0;
  width: 60%;
  padding: 1rem 0;
  background-color: ${({ theme }) => theme.colors.black};
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