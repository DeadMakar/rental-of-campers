import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFavoritesCampers } from "../../redux/cars/selectors";
import { selectVisibleCampers } from "../../redux/cars/selectorsFilters";
import { CatalogList } from "../../components/CatalogList";
import { Container } from "../../styles/GlobalStyles";
import { selectIsLoading } from "../../redux/cars/selectors";
import { Loader } from "../../components/Loader";
import { Title } from "./Favorites.styled";

const FavoritesPage = () => {
  const likedCampers = useSelector(selectFavoritesCampers);
  const campersByFilter = useSelector(selectVisibleCampers);
  const isLoading = useSelector(selectIsLoading);

  const favoriteCampers = campersByFilter.filter((camp) =>
    likedCampers.includes(camp._id)
  );

  return (
    <Container>
      {favoriteCampers.length === 0 && (
        <>
          <Title>Sorry, but you still don't have a favorite model) </Title>
        </>
      )}
      {isLoading ? (
        <Loader />
      ) : (
        <CatalogList campers={favoriteCampers} pathForModal="favorites" />
      )}
    </Container>
  );
};

export default FavoritesPage;
