import sprite from "../../assets/images/sprite.svg";
import {
  Comment,
  ListItem,
  Name,
  RatingIcon,
  RatingList,
  ReviewImage,
  ReviewsWrapper,
  UserInfo,
} from "./Reviews.styled";

const Reviews = ({ card }) => {
  const { reviews } = card;

  return (
    <ReviewsWrapper>
      <div>
        <ul>
          {reviews &&
            reviews.map((item) => (
              <ListItem key={item.reviewer_name}>
                <UserInfo>
                  <ReviewImage>{item.reviewer_name.charAt(0)}</ReviewImage>
                  <Name>{item.reviewer_name}</Name>
                  <RatingList>
                    {[...Array(5)].map((_, index) => (
                      <li key={index}>
                        {index < item.reviewer_rating ? (
                          <RatingIcon>
                            <use href={sprite + "#icon-star"} fill="#FFC531" />
                          </RatingIcon>
                        ) : (
                          <RatingIcon>
                            <use href={sprite + "#icon-star"} fill="#F2F4F7" />
                          </RatingIcon>
                        )}
                      </li>
                    ))}
                  </RatingList>
                </UserInfo>
                <Comment>{item.comment}</Comment>
              </ListItem>
            ))}
        </ul>
      </div>
    </ReviewsWrapper>
  );
};

export default Reviews;
