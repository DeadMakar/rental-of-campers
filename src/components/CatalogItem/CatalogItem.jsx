import { useState } from "react";
import sprite from "../../assets/images/sprite.svg";
import {
  Button,
  Description,
  Image,
  InfoBox,
  InfoBoxField,
  Item,
  LocationIcon,
  LocationText,
  Name,
  NamePriceLine,
  Price,
  PriceLikeField,
  RatingIcon,
  RatingReviews,
  RationLocationLine,
} from "./CatalogItem.styled";
import { Modal } from "../Modal";
import { FavoriteBtn } from "../FavoriteBtn";

const CatalogItem = ({ camper }) => {
  const [isModalShown, setIsModalShown] = useState(false);
  const [activeTab, setActiveTab] = useState("features");
  const [clickToReviews, setClickToReviews] = useState(false);
  const {
    _id,
    name,
    price,
    rating,
    location,
    adults,
    engine,
    transmission,
    description,
    details,
    gallery,
    reviews,
  } = camper;

  return (
    <Item key={_id}>
      <Image src={gallery[0]} alt={name} width={290} height={310} />
      <div>
        <NamePriceLine>
          <Name>{name}</Name>
          <PriceLikeField>
            <Price>
              €{price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, "")}
            </Price>
            <FavoriteBtn item={camper} />
          </PriceLikeField>
        </NamePriceLine>
        <RationLocationLine>
          <RatingReviews>
            <RatingIcon>
              <use href={sprite + "#icon-star"} />
            </RatingIcon>
            {rating} ({reviews.length} Reviews)
          </RatingReviews>
          <LocationText>
            <LocationIcon>
              <use href={sprite + "#icon-location"} />
            </LocationIcon>
            {location}
          </LocationText>
        </RationLocationLine>
        <Description>{description}</Description>
        <InfoBoxField>
          <InfoBox>
            <svg>
              <use href={sprite + "#icon-adults"} />
            </svg>
            <p> {adults} adults</p>
          </InfoBox>
          <InfoBox>
            <svg>
              <use
                href={sprite + "#icon-automatic"}
                style={{ stroke: "#101828", fill: "transparent" }}
              />
            </svg>
            <p> {transmission}</p>
          </InfoBox>
          <InfoBox>
            <svg>
              <use href={sprite + "#icon-petrol"} />
            </svg>
            <p> {engine}</p>
          </InfoBox>
          <InfoBox>
            <svg>
              <use
                href={sprite + "#icon-kitchen"}
                style={{ stroke: "#101828", fill: "transparent" }}
              />
            </svg>
            <p> {details.kitchen && "Kitchen"} </p>
          </InfoBox>
          <InfoBox>
            <svg>
              <use
                href={sprite + "#icon-beds"}
                style={{ stroke: "#101828", fill: "transparent" }}
              />
            </svg>
            <p> {details.beds} beds</p>
          </InfoBox>
          <InfoBox>
            <svg>
              <use href={sprite + "#icon-ac"} />
            </svg>
            <p> AC</p>
          </InfoBox>
        </InfoBoxField>
        <Button
          type="button"
          aria-label="Show more details"
          onClick={() => {
            setIsModalShown(true);
            document.body.style.overflow = "hidden";
          }}
        >
          Show more
        </Button>
      </div>
      {isModalShown && (
        <Modal
          card={camper}
          isModalShown={isModalShown}
          closeModal={() => setIsModalShown(false)}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          clickToReviews={clickToReviews}
        />
      )}
    </Item>
  );
};

export default CatalogItem;
