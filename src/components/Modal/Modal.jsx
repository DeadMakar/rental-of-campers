import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import sprite from "../../assets/images/sprite.svg";
import { Tabs } from "../Tabs";
import {
  Backdrop,
  CloseBtn,
  Content,
  HeadInfo,
  ModalDescr,
  PicsList,
  Window,
  ModalContainer,
  Title,
  RatingLocationWrap,
  RatingWrap,
  LocationWrap,
  Price,
} from "./Modal.styled";

const Modal = ({
  card,
  isModalShown,
  closeModal,
  activeTab,
  setActiveTab,
  clickToReviews,
}) => {
  const tabsRef = useRef();

  useEffect(() => {
    const handleESCClose = (e) => {
      if (e.code === "Escape") closeModal();
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

  const handleCloseModal = () => {
    closeModal();

    document.body.style.overflow = "visible";
  };

  const handleBackdropClose = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      handleCloseModal();
    }
  };

  return createPortal(
    <Backdrop
      className={isModalShown ? "is-shown" : "is-hidden"}
      onClick={handleBackdropClose}
    >
      <ModalContainer onClick={handleBackdropClose}>
        <Window className={isModalShown ? "is-shown" : "is-hidden"}>
          <CloseBtn
            type="button"
            aria-label="Close modal"
            onClick={handleCloseModal}
          >
            <svg>
              <use href={sprite + "#icon-close"} />
            </svg>
          </CloseBtn>

          <Content>
            <HeadInfo>
              <Title>{card.name}</Title>

              <RatingLocationWrap id="rating-wrap">
                <RatingWrap>
                  <svg style={{ width: "16px", height: "16px" }}>
                    <use href={sprite + "#icon-star"} />
                  </svg>
                  <p>{`${card.rating}(${card.reviews.length} Reviews)`}</p>
                </RatingWrap>

                <LocationWrap>
                  <svg style={{ width: "14px", height: "16px" }}>
                    <use href={sprite + "#icon-location"} />
                  </svg>
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
      </ModalContainer>
    </Backdrop>,
    document.getElementById("modal-root")
  );
};

export default Modal;
