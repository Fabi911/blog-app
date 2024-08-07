import styled from "styled-components";

export default function Layout({ children }) {
  return (
      <>
    <Header>
        <Headline>My Blog</Headline>
    </Header>
      {children}
    <Footer>
        <p>Footer</p>
    </Footer>
      </>
  );
}

const Header = styled.header`
    background-color: #f0f0f0;
    width: 100vw;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.6rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
`;

const Headline = styled.h1`
  margin:0;
    font-size: 3.2rem;

`

const Footer = styled.footer`
  margin:0;
  background-color: #f0f0f0;
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
`;