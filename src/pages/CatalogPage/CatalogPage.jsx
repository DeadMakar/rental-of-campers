import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCars } from "../../redux/cars/operations";
import { CurrentLocation } from "../../components/CurrentLocation";
import { CatalogList } from "../../components/CatalogList";
import { Filters } from "../../components/Filters";
import { Container } from "../../styles/GlobalStyles";
import { Wrapper } from "./CatalogPage.styled";

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <Container>
      <Wrapper>
        <div>
          <CurrentLocation />
          <Filters />
        </div>
        <CatalogList />
      </Wrapper>
    </Container>
  );
};

export default CatalogPage;
