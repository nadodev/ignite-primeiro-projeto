import styled from 'styled-components'
import { ButtonVariant } from './Button'

interface IContainer {
  variant?: ButtonVariant
}

export const ContainerButton = styled.button<IContainer>`
  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
  height: 50px;
  cursor: pointer;
`
