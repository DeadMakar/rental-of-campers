import { useDispatch, useSelector } from "react-redux";
import { CurrentLocation } from "../../components/CurrentLocation";
import { CatalogList } from "../../components/CatalogList";
import { Filters } from "../../components/Filters";
import { Container } from "../../styles/GlobalStyles";
import { Wrapper } from "./CatalogPage.styled";
import { selectCampers } from "../../redux/cars/selectors";
import { selectVisibleCampers } from "../../redux/cars/selectorsFilters";

const CatalogPage = () => {
  const campers = useSelector(selectVisibleCampers);
  const carsInfo = useSelector(selectCampers);

  return (
    <Container>
      <Wrapper>
        <div>
          <CurrentLocation carsInfo={carsInfo} />
          <Filters />
        </div>
        <CatalogList campers={campers} />
      </Wrapper>
    </Container>
  );
};

export default CatalogPage;
