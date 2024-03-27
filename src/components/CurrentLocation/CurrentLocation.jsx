import { useEffect, useState } from "react";
import sprite from "../../assets/images/sprite.svg";
import { selectCampers } from "../../redux/cars/selectors";
import {
  LocationBox,
  Svg,
  Title,
  Input,
  Error,
} from "./CurrentLocation.styled";
import { useSelector } from "react-redux";
import { changeLocation } from "../../redux/cars/filterSlice";
import { useDispatch } from "react-redux";
import { selectLocation } from "../../redux/cars/selectorsFilters";

const CurrentLocation = () => {
  const [userCity, setUserCity] = useState("");
  const [filteredCars, setFilteredCars] = useState([]);
  const [locationInfo, setLocationInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const carsInfo = useSelector(selectCampers);

  const dispatch = useDispatch();
  const location = useSelector(selectLocation);

  const handleInputChange = (e) => {
    setUserCity(e.target.value);
    dispatch(changeLocation(e.target.value));
  };

  useEffect(() => {
    const getLocationInfo = async () => {
      try {
        if (!userCity) {
          const responseIp = await fetch("https://api.ipify.org?format=json");
          const { ip } = await responseIp.json();
          const responseLocation = await fetch(`https://ipapi.co/${ip}/json/`);
          const data = await responseLocation.json();
          setLocationInfo(data);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error getting location information:", error);
      }
    };

    getLocationInfo();
  }, [userCity]);

  useEffect(() => {
    if (userCity) {
      const filtered = carsInfo?.filter((camper) =>
        camper.location.toLowerCase().includes(userCity.toLowerCase())
      );
      setFilteredCars(filtered);
    } else {
      setFilteredCars([]);
    }
  }, [userCity, carsInfo]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Title>
            You location: {locationInfo?.country_name},{" "}
            {userCity || locationInfo?.city}
          </Title>
          <LocationBox>
            <Svg>
              <use href={sprite + "#icon-location"} />
            </Svg>
            <Input
              type="text"
              placeholder="Enter city"
              value={userCity}
              onChange={handleInputChange}
            />
          </LocationBox>
          {filteredCars.length > 0 && (
            <div>
              <h3>Filtered Cars:</h3>
              <ul>
                {filteredCars.map((camper) => (
                  <li key={camper._id}>{camper.name}</li>
                ))}
              </ul>
            </div>
          )}
          {filteredCars.length === 0 && userCity && (
            <Error>No cars available in {userCity}</Error>
          )}
        </>
      )}
    </div>
  );
};

export default CurrentLocation;
