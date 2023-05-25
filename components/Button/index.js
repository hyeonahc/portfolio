import Link from 'next/link'
import { ButtonWrapper, StyledButton } from './Button.styled'

const Button = ({ btnInfo }) => {
  return (
    <ButtonWrapper>
      {btnInfo &&
        btnInfo.map((btn, index) => (
          <Link
            key={btn.name}
            href={btn.link}
            target={btn.newTab ? '_blank' : '_self'}>
            <StyledButton primary={index && true}>{btn.name}</StyledButton>
          </Link>
        ))}
    </ButtonWrapper>
  )
}

export default Button
