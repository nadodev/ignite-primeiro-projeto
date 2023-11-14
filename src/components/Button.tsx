import * as S from './style'

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'

interface ButtonProps {
  variant: ButtonVariant
}

export function Button({ variant }: ButtonProps) {
  return <S.ContainerButton variant={variant}>Enviar</S.ContainerButton>
}
