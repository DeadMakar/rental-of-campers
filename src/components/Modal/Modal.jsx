import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import sprite from "../../assets/images/sprite.svg";
import { Container } from "../../styles/GlobalStyles";
import { Tabs } from "../Tabs";
import {
  Backdrop,
  CloseBtn,
  Content,
  HeadInfo,
  LocationIcon,
  LocationWrap,
  ModalDescr,
  PicsList,
  Price,
  RatingIcon,
  RatingLocationWrap,
  RatingWrap,
  Title,
  Window,
} from "./Modal.styled";

const Modal = ({
  card,
  closeModal,
  activeTab,
  setActiveTab,
  clickToReviews,
}) => {
  const tabsRef = useRef();

  useEffect(() => {
    const handleESCClose = (e) => {
      if (e.code === "Escape") {
        closeModal();
        document.body.style.overflow = "visible";
      }
    };

    window.addEventListener("keydown", handleESCClose);

    return () => window.removeEventListener("keydown", handleESCClose);
  }, [closeModal]);

  useEffect(() => {
    clickToReviews &&
      tabsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        duration: 1000,
      });
  }, [clickToReviews]);

  const handleBackdropClose = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      closeModal();
      document.body.style.overflow = "visible";
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClose}>
      <Container onClick={handleBackdropClose}>
        <Window>
          <CloseBtn
            onClick={() => {
              closeModal();
              document.body.style.overflow = "visible";
            }}
          >
            <svg>
              <use href={sprite + "#icon-close"}></use>
            </svg>
          </CloseBtn>

          <Content>
            <HeadInfo>
              <Title>{card.name}</Title>

              <RatingLocationWrap id="rating-wrap">
                <RatingWrap>
                  <RatingIcon>
                    <use href={sprite + "#icon-star"} />
                  </RatingIcon>
                  <p>{`${card.rating}(${card.reviews.length} Reviews)`}</p>
                </RatingWrap>

                <LocationWrap>
                  <LocationIcon>
                    <use href={sprite + "#icon-location"} />
                  </LocationIcon>
                  <p>{card.location.split(",").reverse().join(", ")}</p>
                </LocationWrap>
              </RatingLocationWrap>

              <Price>€{card.price.toFixed(2)}</Price>
            </HeadInfo>

            <PicsList>
              {card.gallery.length > 0 &&
                card.gallery.map((link, i) => (
                  <li key={`${card._id}/${i}`}>
                    <img src={link} alt={card.name} />
                  </li>
                ))}
            </PicsList>

            <ModalDescr>{card.description}</ModalDescr>

            <div ref={tabsRef}>
              <Tabs
                card={card}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </div>
          </Content>
        </Window>
      </Container>
    </Backdrop>,
    document.getElementById("modal-root")
  );
};

export default Modal;
