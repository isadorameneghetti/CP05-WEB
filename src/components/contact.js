import React, { useState } from "react";
import styled from "styled-components";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormStatus("Por favor, insira um e-mail válido.");
      return;
    }

    setFormStatus("E-mail enviado com sucesso! Agradecemos o contato.");
    setEmail("");
    setMessage("");
  };

  return (
    <FormContainer id="contact">
      <FormTitle>Entre em Contato</FormTitle>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="email">E-mail</Label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu e-mail"
          required
        />

        <Label htmlFor="message">Mensagem</Label>
        <TextArea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escreva sua mensagem"
          rows="4"
          required
        />

        <SubmitButton type="submit">Enviar</SubmitButton>
        {formStatus && <StatusMessage>{formStatus}</StatusMessage>}
      </Form>
    </FormContainer>
  );
};

export default ContactForm;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  background: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 2rem auto;
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const Input = styled.input`
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
  transition: border 0.3s;

  &:focus {
    border-color: #ff6347;
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
  margin-bottom: 1rem;
  transition: border 0.3s;

  &:focus {
    border-color: #ff6347;
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background: #ff6347;
  border: none;
  color: white;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: background 0.3s;

  &:hover {
    background: #ff4500;
  }
`;

const StatusMessage = styled.p`
  font-size: 1rem;
  margin-top: 1rem;
  color: ${({ children }) => (children.includes("sucesso") ? "green" : "red")};
  font-weight: bold;
`;