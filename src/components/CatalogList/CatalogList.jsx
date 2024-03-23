import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCars } from "../../redux/cars/selectors";
import { CatalogItem } from "../CatalogItem";
import { Button, List } from "./CatalogList.styled";

const CatalogList = () => {
  const carsInfo = useSelector(selectCars);
  const [visibleCars, setVisibleCars] = useState(4);

  if (!carsInfo || carsInfo.length === 0) {
    return <div>No cars available</div>;
  }

  const loadMore = () => {
    setVisibleCars((prevVisibleCars) => prevVisibleCars + 4);
  };

  return (
    <div>
      <List>
        {carsInfo.slice(0, visibleCars).map((car) => (
          <CatalogItem key={car._id} car={car} />
        ))}
      </List>
      {visibleCars < carsInfo.length && (
        <Button onClick={loadMore}>Load more</Button>
      )}
    </div>
  );
};

export default CatalogList;
