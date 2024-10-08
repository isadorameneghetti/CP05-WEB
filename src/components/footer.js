import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <ContactSection>
          <FooterTitle>Informações de Contato</FooterTitle>
          <ContactInfo>
            <p>
              <i className="fas fa-envelope"></i> Email: contato@gourmetOn.com
            </p>
            <p>
              <i className="fas fa-phone"></i> Telefone: +55 11 1234-5678
            </p>
            <p>Endereço: Rua das Flores, 123, São Paulo - SP</p>
          </ContactInfo>
        </ContactSection>

        <SocialSection>
          <FooterTitle>Redes Sociais</FooterTitle>
          <SocialIcons>
            <SocialLink href="https://www.facebook.com" target="_blank" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </SocialLink>
            <SocialLink href="https://www.twitter.com" target="_blank" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </SocialLink>
            <SocialLink href="https://www.instagram.com" target="_blank" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </SocialLink>
            <SocialLink href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </SocialLink>
          </SocialIcons>
        </SocialSection>

        <TermsSection>
          <FooterTitle>Termos de Uso</FooterTitle>
          <TermsList>
            <TermsItem>
              <a href="/privacidade">Política de Privacidade</a>
            </TermsItem>
            <TermsItem>
              <a href="/termos">Termos de Serviço</a>
            </TermsItem>
            <TermsItem>
              <a href="/cookies">Política de Cookies</a>
            </TermsItem>
          </TermsList>
        </TermsSection>
      </FooterWrapper>
      <FooterCopy>
        &copy; {new Date().getFullYear()} GourmetOn. Todos os direitos reservados.
      </FooterCopy>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: #222;
  color: #fff;
  width: 100%;
  text-align: center;
  font-family: "Arial", sans-serif;
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FooterTitle = styled.h4`
  font-size: 1.5rem;
  margin-top: 4rem;
  margin-bottom: 1rem;
  color: #ff6347;
`;

const ContactSection = styled.div`
  flex: 1;
  min-width: 250px;
  margin-bottom: 2rem;

  p {
    margin: 0.5rem 0;
  }

  i {
    margin-right: 0.5rem;
  }
`;

const ContactInfo = styled.div`
  font-size: 1rem;
  line-height: 1.6;
`;

const SocialSection = styled.div`
  flex: 1;
  min-width: 250px;
  margin-bottom: 2rem;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.3s;

  &:hover {
    color: #ff6347;
  }
`;

const TermsSection = styled.div`
  flex: 1;
  min-width: 250px;
  margin-bottom: 2rem;
`;

const TermsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TermsItem = styled.li`
  margin-bottom: 0.5rem;

  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #ff6347;
    }
  }
`;

const FooterCopy = styled.p`
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #999;
`;