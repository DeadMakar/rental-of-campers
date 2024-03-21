import { useSelector } from "react-redux";
import { selectCars } from "../../redux/cars/selectors";
import { CatalogItem } from "../CatalogItem";
import { List } from "./CatalogList.styled";

const CatalogList = () => {
  const carsInfo = useSelector(selectCars);

  return (
    <List>
      {carsInfo.map((camper) => (
        <CatalogItem key={camper._id} camper={camper} />
      ))}
    </List>
  );
};

export default CatalogList;
