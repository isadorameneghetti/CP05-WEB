import React from "react";
import styled from "styled-components";
import BackgroundImage from "../assets/thai-food-6754240_1920.jpg";

const Hero = () => {
  return (
    <HeroContainer id="home">
      <Content>
        <Title>Experimente o Sabor como Nunca Antes!</Title>
        <Description>
          Descubra receitas incríveis e peça os melhores pratos com apenas um toque. Baixe agora nosso aplicativo e eleve sua experiência culinária!
        </Description>
        <Button>Baixar App</Button>
      </Content>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${BackgroundImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
  text-align: center;
  padding: 0 2rem;
`;

const Content = styled.div`
  max-width: 100%;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background: #ff6347;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #ff4500;
  }
`;