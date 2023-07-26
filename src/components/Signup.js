import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 89vh;
  padding: 2rem;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
  display: start;
  animation: ${fadeInUp} 1s ease;
`;

const FormContainer = styled.form`
  display: start;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
  animation: ${fadeInUp} 1s ease;
`;

const FormField = styled.div`

  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  font-size: 1.2rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`

  background-color: #0066ff;
  color: white;
  padding: 0.8rem;
  font-size: 1.2rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #000;
  }
`;

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your signup logic here
    // For example, send the form data to the server for registration
  };

  return (
    <Container>
      <Title>Sign Up</Title>
      <FormContainer onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="firstName">First Name:</Label>
          <Input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        </FormField>
        <FormField>
          <Label htmlFor="lastName">Last Name:</Label>
          <Input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        </FormField>
        <FormField>
          <Label htmlFor="email">Email:</Label>
          <br/>
          <Input type="text" name="email" value={formData.email} onChange={handleChange} />
        </FormField>
        <FormField>
          <Label htmlFor="password">Password:</Label>
          <Input type="password" name="password" value={formData.password} onChange={handleChange} />
        </FormField>
        <Button type="submit">Sign Up</Button>
      </FormContainer>
    </Container>
  );
};

export default Signup;
