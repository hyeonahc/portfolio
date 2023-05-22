import { useRouter } from 'next/router'
import { StyledButton } from './Button.styled'

const Button = ({ name, primary, link }) => {
  const router = useRouter()

  return (
    <StyledButton
      primary={primary}
      onClick={() => router.push(link)}>
      {name}
    </StyledButton>
  )
}

export default Button
