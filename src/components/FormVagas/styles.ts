import styled from 'styled-components'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;

  /* button {
    background-color: var(--cor-principal);
    border: 1px solid var(--cor-principal);
    height: 40px;
    padding: 0 16px;
    font-size: 18px;
    color: var(--cor-secundaria);
    margin-left: 8px;
    cursor: pointer;
  } */

  input {
    padding: 0 16px;
    outline-color: var(--cor-principal);
  }
`
// Nesse caso fiz os dois exemplos trabalhando com ele em um unico export e separados.
// Nesse processo ao aplicar o ButtonSearch ele comento o button de cima e para ver a aplicação
// adiciono nele o border-radius: 50px

export const ButtonSearch = styled.button`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  border-radius: 50px;
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;
`

export const InputSearch = styled.input`
  padding: 0 16px;
  outline-color: var(--cor-principal);
`
