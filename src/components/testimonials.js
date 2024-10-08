import React, { useState } from "react";
import styled from "styled-components";


import cliente1 from "../assets/professorcria.jpeg";
import cliente2 from "../assets/professora.jpeg";
import cliente3 from "../assets/professor2.jpeg";


const testimonialsData = [
  {
    name: "Lucas Silva",
    text: "O aplicativo é fantástico! As entregas são rápidas e o suporte é incrível. Recomendo para todos!",
    image: cliente1,
  },
  {
    name: "Ana Paula",
    text: "Adoro a variedade de restaurantes e a facilidade de filtrar opções saudáveis. Acompanhar meu pedido em tempo real é ótimo.",
    image: cliente2,
  },
  {
    name: "Carlos Eduardo",
    text: "Nunca foi tão fácil encontrar minha comida favorita. As recomendações são sempre no ponto!",
    image: cliente3,
  },
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  return (
    <CarouselContainer id="testimonials">
      <CarouselTitle>Depoimentos</CarouselTitle>
      <Testimonial>
        <ProfileImage src={testimonialsData[currentIndex].image} alt={testimonialsData[currentIndex].name} />
        <TestimonialText>"{testimonialsData[currentIndex].text}"</TestimonialText>
        <Author>- {testimonialsData[currentIndex].name}</Author>
      </Testimonial>
      <ButtonsContainer>
        <Button onClick={goToPrevious}>&lt;</Button>
        <Button onClick={goToNext}>&gt;</Button>
      </ButtonsContainer>
    </CarouselContainer>
  );
};

export default TestimonialsCarousel;

const CarouselContainer = styled.div`
  background: #f7f7f7;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 2rem auto;
  text-align: center;
`;

const CarouselTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const Testimonial = styled.div`
  margin-bottom: 2rem;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const TestimonialText = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 1rem;
  font-style: italic;
`;

const Author = styled.p`
  font-size: 1.1rem;
  color: #333;
  font-weight: bold;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
  margin: 0 auto;
`;

const Button = styled.button`
  background: #ff6347;
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: background 0.3s;

  &:hover {
    background: #ff4500;
  }
`;