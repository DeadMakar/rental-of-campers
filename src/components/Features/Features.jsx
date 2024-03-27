import sprite from "../../assets/images/sprite.svg";
import {
  FeatureReviewsWrap,
  DetailsItemsWrap,
  VehicleDetailsWrap,
  VehicleDetailsList,
  DetailsList,
} from "./Features.styled";
import { InfoBox, InfoBoxField } from "../CatalogItem/CatalogItem.styled";

const Features = ({
  card: {
    adults,
    transmission,
    engine,
    form,
    length,
    width,
    height,
    tank,
    consumption,
    details,
  },
}) => {
  return (
    <FeatureReviewsWrap>
      <DetailsItemsWrap>
        <DetailsList>
          <InfoBoxField>
            {adults > 0 && (
              <InfoBox>
                <svg>
                  <use href={sprite + "#icon-adults"} />
                </svg>
                <p> {adults} adults</p>
              </InfoBox>
            )}
            {transmission > 0 && (
              <InfoBox>
                <svg>
                  <use
                    href={sprite + "#icon-automatic"}
                    style={{ stroke: "#101828", fill: "transparent" }}
                  />
                </svg>
                <p> {transmission}</p>
              </InfoBox>
            )}
            {engine > 0 && (
              <InfoBox>
                <svg>
                  <use href={sprite + "#icon-petrol"} />
                </svg>
                <p> {engine}</p>
              </InfoBox>
            )}
            {details.kitchen && (
              <InfoBox>
                <svg>
                  <use
                    href={sprite + "#icon-kitchen"}
                    style={{ stroke: "#101828", fill: "transparent" }}
                  />
                </svg>
                <p> Kitchen </p>
              </InfoBox>
            )}
            {details.beds > 0 && (
              <InfoBox>
                <svg>
                  <use
                    href={sprite + "#icon-beds"}
                    style={{ stroke: "#101828", fill: "transparent" }}
                  />
                </svg>
                <p> {details.beds} beds</p>
              </InfoBox>
            )}
            {details.airConditioner > 0 && (
              <InfoBox>
                <svg>
                  <use href={sprite + "#icon-ac"} />
                </svg>
                <p> AC</p>
              </InfoBox>
            )}
            {details.airConditioner > 0 && (
              <InfoBox>
                <svg>
                  <use
                    href={sprite + "#icon-air-conditioner"}
                    style={{ stroke: "#101828", fill: "transparent" }}
                  />
                </svg>
                <p> {details.airConditioner} beds</p>
              </InfoBox>
            )}
            {details.CD > 0 && (
              <InfoBox>
                <svg>
                  <use
                    href={sprite + "#icon-cd"}
                    style={{ stroke: "#101828", fill: "transparent" }}
                  />
                </svg>
                <p> {details.CD} CD</p>
              </InfoBox>
            )}
            {details.radio > 0 && (
              <InfoBox>
                <svg>
                  <use
                    href={sprite + "#icon-radio"}
                    style={{ stroke: "#101828", fill: "transparent" }}
                  />
                </svg>
                <p> {details.radio} radio</p>
              </InfoBox>
            )}
            {details.TV > 0 && (
              <InfoBox>
                <svg>
                  <use
                    href={sprite + "#icon-tv"}
                    style={{ stroke: "#101828", fill: "transparent" }}
                  />
                </svg>
                <p> {details.TV} TV</p>
              </InfoBox>
            )}
            {details.shower > 0 && (
              <InfoBox>
                <svg>
                  <use
                    href={sprite + "#icon-shower"}
                    style={{ stroke: "#101828", fill: "transparent" }}
                  />
                </svg>
                <p> {details.shower} shower</p>
              </InfoBox>
            )}
            {details.hob > 0 && (
              <InfoBox>
                <svg>
                  <use
                    href={sprite + "#icon-hob"}
                    style={{ stroke: "#101828", fill: "transparent" }}
                  />
                </svg>
                <p> {details.hob} hob</p>
              </InfoBox>
            )}
            {details.toilet > 0 && (
              <InfoBox>
                <svg>
                  <use
                    href={sprite + "#icon-toilet"}
                    style={{ stroke: "#101828", fill: "transparent" }}
                  />
                </svg>
                <p> {details.toilet} toilet</p>
              </InfoBox>
            )}
            {details.freezer > 0 && (
              <InfoBox>
                <svg>
                  <use
                    href={sprite + "#icon-freezer"}
                    style={{ stroke: "#101828", fill: "transparent" }}
                  />
                </svg>
                <p> {details.freezer} freezer</p>
              </InfoBox>
            )}
            {details.microwave > 0 && (
              <InfoBox>
                <svg>
                  <use
                    href={sprite + "#icon-microwave"}
                    style={{ stroke: "#101828", fill: "transparent" }}
                  />
                </svg>
                <p> {details.microwave} microwave</p>
              </InfoBox>
            )}
            {details.gas > 0 && (
              <InfoBox>
                <svg>
                  <use
                    href={sprite + "#icon-gas"}
                    style={{ stroke: "#101828", fill: "transparent" }}
                  />
                </svg>
                <p> {details.gas} gas</p>
              </InfoBox>
            )}
            {details.water > 0 && (
              <InfoBox>
                <svg>
                  <use
                    href={sprite + "#icon-water"}
                    style={{ stroke: "#101828", fill: "transparent" }}
                  />
                </svg>
                <p> {details.water} water</p>
              </InfoBox>
            )}
          </InfoBoxField>
        </DetailsList>
      </DetailsItemsWrap>

      <VehicleDetailsWrap>
        <h3>Vehicle details</h3>
        <hr />
        <VehicleDetailsList>
          <li className="capitalize">
            <p>Form</p>
            <p>
              {form === "alcove"
                ? form
                : `${form.slice(0, 5)} ${form.slice(5)}`}
            </p>
          </li>

          <li>
            <p>Length</p>
            <p>{length}</p>
          </li>

          <li>
            <p>Width</p>
            <p>{width}</p>
          </li>

          <li>
            <p>Height</p>
            <p>{height}</p>
          </li>

          <li>
            <p>Tank</p>
            <p>{tank}</p>
          </li>

          <li>
            <p>Consumption</p>
            <p>{consumption}</p>
          </li>
        </VehicleDetailsList>
      </VehicleDetailsWrap>
    </FeatureReviewsWrap>
  );
};

export default Features;
