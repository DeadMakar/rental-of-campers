import { HomeWrapper, Button } from "./HomePage.styled";
import { Link } from "react-router-dom";
import sprite from "../../assets/images/sprite.svg";

const HomePage = () => {
  return (
    <HomeWrapper>
      <div>
        <h1>
          HEY YOU!!! LIKE TO TRAVEL WITH COMFORT?
          <br />
          DO YOU LOVE A HOME ATMOSPHERE?
          <br />
        </h1>
        <h2>YOU CAME TO THE RIGHT ADDRESS</h2>
        <p>The military will never find you if your home is a mobile home )</p>
        <Link to="/catalog">
          <Button>
            <svg>
              <use href={sprite + "#icon-van"} />
            </svg>
            MAKE YOUR CHOICE
            <svg>
              <use href={sprite + "#icon-alcove"} />
            </svg>
          </Button>
        </Link>
      </div>
    </HomeWrapper>
  );
};

export default HomePage;
