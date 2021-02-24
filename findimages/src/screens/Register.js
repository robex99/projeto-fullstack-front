import React from 'react'
import styled from 'styled-components'
import {useForm} from '../hooks/useForm'


export default function Register() {

    const [form, onChange] = useForm({
        name: "",
        nickname: "",
        email: "",
        password: ""
      });

      const onSubmitForm = (event) => {
        event.preventDefault();
      };

    return (
        <Container>
            <FormWrapper onSubmit={onSubmitForm}>
            <StyledInput
            required
            onChange={onChange}
            value={form.name}
            placeholder="Nome"
            type="text"
            name={"name"}
          />
          <StyledInput
            required
            onChange={onChange}
            value={form.nickname}
            placeholder="Nickname"
            type="text"
            name={"nickname"}
          />
          <StyledInput
            required
            onChange={onChange}
            value={form.email}
            placeholder="Email"
            type="text"
            name={"email"}
          />
          <StyledInput
            required
            onChange={onChange}
            value={form.password}
            placeholder="Senha"
            type="password"
            name={"password"}
          />

            <StyledButton>Registrar</StyledButton>
            </FormWrapper>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 40vw;
  align-self: center;
  justify-content: center;
  background-color: white;
  margin: 1.3rem;
`;

const StyledInput = styled.input`
  border: none;
  margin: 1.6rem;
  height: 5vh;
  outline: none;
  background-color: transparent;
  color: black;
  border-bottom: 2px solid silver;
`;

const StyledButton = styled.button`
    display: flex;
    background-color: blue;
`