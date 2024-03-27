import styled from "styled-components";

export const FeatureReviewsWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px 0;
`;

export const DetailsItemsWrap = styled.div`
  padding-bottom: 40px;
  width: 430px;
`;

export const VehicleDetailsWrap = styled.div`
  h3 {
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
    color: #101828;
    margin-bottom: 32px;
  }

  hr {
    background-color: rgba(16, 24, 40, 0.2);
    margin-bottom: 20px;
  }
`;

export const VehicleDetailsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.33;
    color: #101828;

    &.capitalize {
      text-transform: capitalize;
    }
  }
`;

export const DetailsList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;
