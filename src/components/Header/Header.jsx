import { Nav, StyledLink } from "./Header.styled";
import { Container } from "../../styles/GlobalStyles";

const Header = () => {
  return (
    <Container>
      <header>
        <Nav>
          <StyledLink to="/">HOME</StyledLink>

          <StyledLink to="/catalog">CATALOG</StyledLink>

          <StyledLink to="/favorites">FAVORITES</StyledLink>
        </Nav>
      </header>
    </Container>
  );
};

export default Header;
