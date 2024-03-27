import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: 5;
  background-color: rgba(17, 18, 19, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;

  &.is-shown {
    visibility: visible;
    opacity: 1;
  }

  &.is-hidden {
    visibility: hidden;
    opacity: 0;
  }
`;

export const Window = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 982px;
  height: 90vh;
  border-radius: 20px;
  padding: 40px 40px;
  background-color: #fff;
  overflow-y: auto;
  z-index: 5;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 50px;
    margin: 25px 0;
    background-color: #fff;
  }

  &.is-shown {
    visibility: visible;
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }

  &.is-hidden {
    visibility: hidden;
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.7);
  }
`;

export const Content = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const HeadInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  #rating-wrap {
    margin-top: -15px;
  }
`;

export const ModalDescr = styled.p`
  font-size: 16px;
  color: #475467;
`;

export const PicsList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 7px;
  }

  li {
    width: 100%;
    display: flex;
    align-items: center;
    height: 310px;

    img {
      border-radius: 10px;
      object-fit: cover;
      width: 100%;
      align-self: stretch;
    }
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 40px;
  right: 40px;
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;

  svg {
    stroke: #101828;
    width: 32px;
    height: 32px;
  }
`;

export const ModalContainer = styled.div`
  width: 100%;
  padding: 0 16px;
  margin: 0 auto;
`;

export const Title = styled.p`
  color: rgb(16, 24, 40);
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 1.5;
  text-align: left;
  margin-bottom: 10px;
`;

export const RatingLocationWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const RatingWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  text-decoration: underline;
  text-decoration-skip-ink: none;

  button {
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      color: #ffc531;
    }
  }
`;

export const LocationWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  svg {
    fill: none;
    stroke: #101828;
  }
`;

export const Price = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
`;

export const AdditionalNavigation = styled.div`
  margin-top: 44px;
  margin-bottom: 68px;
  display: flex;
  flex-direction: row;
  gap: 36px;
  position: relative;

  &::after {
    position: absolute;
    content: "";
    background-color: rgba(16, 24, 40, 0.2);
    height: 1px;
    width: 100%;
    bottom: -24px;
  }
`;

export const RatingIcon = styled.svg`
  width: 16px;
  height: 16px;
  fill: rgb(255, 197, 49);
`;

export const LocationIcon = styled.svg`
  width: 14px;
  height: 16px;
  stroke-width: 1.3px;
  fill: transparent;
  stroke: #101828;
`;
