import { useSelector } from "react-redux";
import { selectCars } from "../../redux/cars/selectors";
import { CatalogItem } from "../CatalogItem";
import { List } from "./CatalogList.styled";

const CatalogList = () => {
  const carsInfo = useSelector(selectCars);
  if (!carsInfo || carsInfo.length === 0) {
    return <div>No cars available</div>;
  }

  return (
    <List>
      {carsInfo.map((car) => (
        <CatalogItem key={car._id} car={car} />
      ))}
    </List>
  );
};

export default CatalogList;
