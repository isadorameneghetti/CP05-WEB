import React from "react";
import styled from "styled-components";

const Benefits = () => {
  return (
    <BenefitsContainer id="benefits">
      <Title>Benefícios do Nosso Aplicativo</Title>
      <Cards>
        <Card>
          <Icon>
            <i class="fa-solid fa-person-biking"></i>
          </Icon>
          <CardTitle>Entrega Rápida</CardTitle>
          <Description>
            Receba seus pratos favoritos na porta de casa em minutos, com nossa entrega super rápida e confiável!
          </Description>
        </Card>

        <Card>
          <Icon>
            <i class="fa-solid fa-utensils"></i>
          </Icon>
          <CardTitle>Variedade de Restaurantes</CardTitle>
          <Description>
            Encontre uma vasta seleção de restaurantes e pratos para qualquer ocasião e paladar.
          </Description>
        </Card>

        <Card>
          <Icon>
            <i class="fa-solid fa-credit-card"></i>
          </Icon>
          <CardTitle>Pagamento Fácil</CardTitle>
          <Description>
            Pague de forma prática com diversos métodos disponíveis: cartões de crédito, débito e carteiras digitais.
          </Description>
        </Card>

        <Card>
          <Icon>
            <i class="fa-solid fa-leaf"></i>
          </Icon>
          <CardTitle>Personalização da Dieta</CardTitle>
          <Description>
            Escolha pratos de acordo com suas preferências nutricionais e personalize seu pedido para atender sua dieta.
          </Description>
        </Card>

        <Card>
          <Icon>
            <i class="fa-solid fa-location-crosshairs"></i>
          </Icon>
          <CardTitle>Acompanhe Seu Pedido</CardTitle>
          <Description>
            Veja o status do seu pedido em tempo real e saiba exatamente quando ele chegará!
          </Description>
        </Card>

        <Card>
          <Icon>
            <i class="fa-solid fa-headset"></i>
          </Icon>
          <CardTitle>Atendimento a Qualquer Hora</CardTitle>
          <Description>
            Nossa equipe está disponível para ajudar você a qualquer momento. Perguntas, dúvidas ou problemas? Conte conosco!
          </Description>
        </Card>
      </Cards>
    </BenefitsContainer>
  );
};

export default Benefits;

const BenefitsContainer = styled.div`
  padding: 4rem 2rem;
  background: #f8f9fa;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
`;

const Cards = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 300px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const Icon = styled.div`
  font-size: 3rem;
  color: #ff6347;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
`;