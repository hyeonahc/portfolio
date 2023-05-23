import { useRouter } from 'next/router'
import { ButtonWrapper, StyledButton } from './Button.styled'

const Button = ({ buttonInfo }) => {
  const router = useRouter()

  return (
    <ButtonWrapper>
      {buttonInfo &&
        buttonInfo.map((btn, index) => (
          <StyledButton
            key={btn.name}
            primary={index && true}
            onClick={() => router.push(btn.link)}>
            {btn.name}
          </StyledButton>
        ))}
    </ButtonWrapper>
  )
}

export default Button
