import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/cars/operations";
import { CurrentLocation } from "../../components/CurrentLocation";
import { CatalogList } from "../../components/CatalogList";
import { Filters } from "../../components/Filters";
import { Container } from "../../styles/GlobalStyles";
import { Wrapper } from "./CatalogPage.styled";
import { selectCars } from "../../redux/cars/selectors";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const carsInfo = useSelector(selectCars);
  console.log(carsInfo);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <Container>
      <Wrapper>
        <div>
          <CurrentLocation carsInfo={carsInfo} />
          <Filters />
        </div>
        <CatalogList />
      </Wrapper>
    </Container>
  );
};

export default CatalogPage;
