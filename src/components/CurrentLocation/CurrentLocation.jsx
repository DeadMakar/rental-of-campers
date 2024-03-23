import { useEffect, useState } from "react";
import sprite from "../../assets/images/sprite.svg";
import { selectCars } from "../../redux/cars/selectors";
import { LocationBox, Svg, Title, Input } from "./CurrentLocation.styled";
import { useSelector } from "react-redux";

const CurrentLocation = () => {
  const [userCity, setUserCity] = useState("");
  const [filteredCars, setFilteredCars] = useState([]);
  const [locationInfo, setLocationInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const carsInfo = useSelector(selectCars);

  const handleInputChange = (e) => {
    setUserCity(e.target.value);
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
      const filtered = carsInfo?.filter((car) =>
        car.location.toLowerCase().includes(userCity.toLowerCase())
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
            Location: {locationInfo?.country_name},{" "}
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
                {filteredCars.map((car) => (
                  <li key={car._id}>{car.name}</li>
                ))}
              </ul>
            </div>
          )}
          {filteredCars.length === 0 && userCity && (
            <p>No cars available in {userCity}</p>
          )}
        </>
      )}
    </div>
  );
};

export default CurrentLocation;
