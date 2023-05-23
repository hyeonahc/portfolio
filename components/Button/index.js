import { useRouter } from 'next/router'
import { ButtonWrapper, StyledButton } from './Button.styled'

const Button = ({ buttonInfo }) => {
  const router = useRouter()

  return (
    <ButtonWrapper>
      {buttonInfo &&
        buttonInfo.map(btn => (
          <StyledButton
            key={btn.name}
            primary={btn.primary}
            onClick={() => router.push(btn.link)}>
            {btn.name}
          </StyledButton>
        ))}
    </ButtonWrapper>
  )
}

export default Button
