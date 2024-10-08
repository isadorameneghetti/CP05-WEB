import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Logo href="">GourmetOn</Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink to="home" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Home</MenuLink>
        <MenuLink to="benefits" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Benefícios</MenuLink>
        <MenuLink to="features" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Funcionalidades</MenuLink>
        <MenuLink to="testimonials" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Depoimentos</MenuLink>
        <MenuLink to="orders" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Pedidos</MenuLink>
        <MenuLink to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Contato</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
    padding: 0 2rem;
    display: flex;
    position: fixed;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: rgba(255, 255, 255);
    width: 100%;
    z-index: 999;
`;

const Logo = styled.a`
    padding: 1rem 2rem;
    color: #000;
    text-decoration: none;
    font-weight: 800;
    font-size: 1.7rem;
    letter-spacing: 0.2rem;
`;

const Hamburger = styled.div`
    padding: 0 2rem;
    display: none;
    flex-direction: column;
    cursor: pointer;

    span {
        height: 3px;
        width: 25px;
        background: #000;
        margin-bottom: 4px;
        border-radius: 5px;
    }

    @media (max-width: 768px) {
        display: flex;
    }
`;

const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media (max-width: 768px) {
        overflow: hidden;
        flex-direction: column;
        width: 100%;
        max-height: ${({ isOpen }) => (isOpen ? "330px" : "0")};
        transition: max-height 0.3s ease-in;
    }
`;

const MenuLink = styled(Link)`
    padding: 1rem 2rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: #000;
    transition: all 0.3s ease-in;
    font-size: 1.2rem;

    &:hover {
        color: #ff6347;
    }
`;