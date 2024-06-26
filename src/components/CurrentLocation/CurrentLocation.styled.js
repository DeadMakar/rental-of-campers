import styled from "styled-components";

export const Wrapper = styled.div`
  width: 360px;
`;

export const Title = styled.p`
  width: 360px;
  height: 24px;
  width: 360px;
  height: 24px;
  color: rgba(16, 24, 40, 0.6);
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
  margin-bottom: 8px;
`;

export const Label = styled.label`
  position: relative;
  font-weight: 500;
  color: rgba(16, 24, 40, 0.6);
`;

export const Svg = styled.svg`
  stroke: rgb(16, 24, 40);
  fill: transparent;
  width: 20px;
  height: 22px;
  margin-left: 18px;
  margin-right: 8px;
`;

export const LocationBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 360px;
  height: 56px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  background: rgb(247, 247, 247);
`;

export const Input = styled.input`
  display: flex;
  flex-direction: row;
  width: 360px;
  height: 56px;
  justify-content: flex-start;
  align-items: center;
  border: none;
  border-radius: 10px;
  background: rgb(247, 247, 247);

  &:focus {
    outline: none;
  }
`;

export const Error = styled.p`
  color: red;
`;
