import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  margin-bottom: 100px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  flex-wrap: wrap;
  align-content: center;
`;

export const Button = styled.button`
  border: 1px solid rgba(71, 84, 103, 0.2);
  border-radius: 200px;
  padding: 16px 32px;
  height: 56px;
  background-color: transparent;
  margin-top: 50px;
  margin-left: 345px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  transition: border-color 0.5s ease;

  &:hover {
    border-color: #e44848;
  }
`;

export const NoCarsMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-left: 200px;
  font-weight: 700;
  font-size: 19px;
`;
