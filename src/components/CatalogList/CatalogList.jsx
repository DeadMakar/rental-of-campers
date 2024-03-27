import { useState } from "react";
import { CatalogItem } from "../CatalogItem";
import { Button, List } from "./CatalogList.styled";

const CatalogList = ({ campers }) => {
  const [visibleCars, setVisibleCars] = useState(4);

  const loadMore = () => {
    setVisibleCars((prevVisibleCars) => prevVisibleCars + 4);
  };

  return (
    <div>
      <List>
        {campers.slice(0, visibleCars).map((camper) => (
          <CatalogItem key={camper._id} camper={camper} />
        ))}
      </List>
      {visibleCars < campers.length && (
        <Button onClick={loadMore}>Load more</Button>
      )}
    </div>
  );
};

export default CatalogList;
