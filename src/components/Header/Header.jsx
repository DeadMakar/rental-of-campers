import { Nav, StyledLink, Number } from "./Header.styled";
import { Container } from "../../styles/GlobalStyles";
import { selectFavoritesCampers } from "../../redux/cars/selectors";
import { useSelector } from "react-redux";

const Header = () => {
  const favorites = useSelector(selectFavoritesCampers);

  return (
    <Container>
      <header>
        <Nav>
          <StyledLink to="/">HOME</StyledLink>

          <StyledLink to="/catalog">CATALOG</StyledLink>

          <StyledLink to="/favorites">
            FAVORITES{" "}
            {favorites.length > 0 && <Number>{favorites.length}</Number>}
          </StyledLink>
        </Nav>
      </header>
    </Container>
  );
};

export default Header;
