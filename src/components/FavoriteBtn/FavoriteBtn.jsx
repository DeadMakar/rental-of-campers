import { useState, useEffect } from "react";
import { ButtonLikeWrapper, IconLike, IconLikeUse } from "./FavoriteBtn.styled";
import sprite from "../../assets/images/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  deleteFavorite,
  storageKey,
} from "../../redux/cars/favoritesSlice";
import { selectFavoritesCampers } from "../../redux/cars/selectors";

const FavoriteBtn = ({ item }) => {
  const [isLike, setIsLike] = useState(false);
  const dispatch = useDispatch();
  const likedCamps = useSelector(selectFavoritesCampers);

  useEffect(() => {
    setIsLike(likedCamps.includes(item._id));
  }, [item._id, likedCamps]);

  const handleLike = () => {
    const updatedLikedItems = isLike
      ? likedCamps.filter((camp) => camp !== item._id)
      : [...new Set([...likedCamps, item._id])];

    localStorage.setItem(storageKey, JSON.stringify(updatedLikedItems));

    if (isLike) {
      dispatch(deleteFavorite(item._id));
    } else {
      dispatch(addFavorite(item._id));
    }
    setIsLike(!isLike);
  };

  return (
    <ButtonLikeWrapper onClick={handleLike}>
      <IconLike>
        <IconLikeUse
          href={sprite + "#icon-heart-null"}
          style={{
            fill: isLike ? "#E44848" : "transparent",
            stroke: isLike ? "#E44848" : "#101828",
          }}
        />
      </IconLike>
    </ButtonLikeWrapper>
  );
};

export default FavoriteBtn;
