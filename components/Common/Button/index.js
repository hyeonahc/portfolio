import Link from 'next/link'
import { Link as Scroll } from 'react-scroll'
import { ButtonWrapper, StyledButton } from './Button.styled'

const Button = ({ btnInfo }) => {
  return (
    <ButtonWrapper>
      {btnInfo &&
        btnInfo.map((btn, index) =>
          btn.sectionTo ? (
            <Scroll
              key={index}
              to={btn.sectionTo}
              smooth={true}>
              <StyledButton primary={index && true}>{btn.name}</StyledButton>
            </Scroll>
          ) : (
            <Link
              key={index}
              href={btn.link}
              target={btn.link && '_blank'}>
              <StyledButton primary={index && true}>{btn.name}</StyledButton>
            </Link>
          )
        )}
    </ButtonWrapper>
  )
}

export default Button
