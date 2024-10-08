import React from "react";
import styled from "styled-components";
import burgerFood from "../assets/burger-3442227_1280.jpg";
import entregador from "../assets/entregador.jpg";
import filtros from "../assets/filtros.jpg";
import fingerFood from "../assets/finger-food-2396094_1280.jpg";
import rocket from "../assets/motoboy_widelg.jpg";
import thumbs from "../assets/thumbs-up-4200437_1280.jpg";

const FeaturesWithImages = () => {
  return (
    <FeaturesContainer id="features">
      <Title>Principais Funcionalidades</Title>
      <FeaturesGrid>
        <FeatureCard>
          <Image src={burgerFood} alt="Busca por Tipo de Comida" aria-label="Imagem de um hambúrguer suculento" />
          <CardTitle>Busca por Tipo de Comida</CardTitle>
          <Description>
            Encontre exatamente o que você deseja com nossa busca personalizada, filtrando por tipos de pratos e preferências culinárias.
          </Description>
        </FeatureCard>

        <FeatureCard>
          <Image src={filtros} alt="Filtros Avançados" aria-label="Pessoa inspecionando um tomate" />
          <CardTitle>Filtros Avançados</CardTitle>
          <Description>
            Ajuste seus resultados com filtros de preço, avaliações, tempo de entrega e mais, para obter apenas os melhores resultados.
          </Description>
        </FeatureCard>

        <FeatureCard>
          <Image src={fingerFood} alt="Histórico de Pedidos" aria-label="Finger food delicioso" />

          <CardTitle>Histórico de Pedidos</CardTitle>
          <Description>
            Refaça seus pedidos favoritos com um clique, acessando facilmente o seu histórico de compras.
          </Description>
        </FeatureCard>

        <FeatureCard>
          <Image src={entregador} alt="Pedidos Rápidos" aria-label="Entregadora entregando comida" />

          <CardTitle>Pedidos Rápidos</CardTitle>
          <Description>
            Adicione pratos ao carrinho e finalize seu pedido rapidamente, com a opção de salvar métodos de pagamento.
          </Description>
        </FeatureCard>

        <FeatureCard>
          <Image src={rocket} alt="Acompanhamento em Tempo Real" aria-label="Entregador" />
          <CardTitle>Acompanhamento em Tempo Real</CardTitle>
          <Description>
            Veja o status do seu pedido e acompanhe o trajeto do entregador até a sua porta, em tempo real.
          </Description>
        </FeatureCard>

        <FeatureCard>
          <Image src={thumbs} alt="Recomendações Inteligentes" aria-label="Um sinal de positivo" />
          <CardTitle>Recomendações Inteligentes</CardTitle>
          <Description>
            Receba sugestões com base nos seus gostos e hábitos, ajudando a descobrir novos pratos e restaurantes.
          </Description>
        </FeatureCard>
      </FeaturesGrid>
    </FeaturesContainer>
  );
};

export default FeaturesWithImages;


const FeaturesContainer = styled.section`
  padding: 4rem 2rem;
  background: #f7f7f7;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  justify-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 100%;
  max-width: 350px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
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