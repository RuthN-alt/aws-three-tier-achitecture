import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #052d24;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  transition: transform 0.3s ease-in-out;
  border-right: 1px solid #00ff9f;

  a {
    font-size: 1.5rem;
    padding: 1.5rem 0;
    color: #d1fae5;
    text-decoration: none;

    &:hover {
      color: #00ff9f;
    }
  }
`;