import styled from "styled-components";

export const TabsWrap = styled.div`
  hr {
    opacity: 0.3;
    background-color: rgba(16, 24, 40, 0.2);
  }
`;

export const TabsList = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;

  li button {
    position: relative;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
    color: #101828;

    &.active::after {
      position: absolute;
      top: 30.5px;
      display: block;
      content: "";
      width: 100%;
      height: 3px;
      background-color: #e44848;
    }
  }
`;

export const RenderBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
