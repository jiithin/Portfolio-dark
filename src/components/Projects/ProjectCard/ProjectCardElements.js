import styled from "@emotion/styled";

export const Card = styled.div`
  background: #37404a;
  display: grid;
  grid-gap: 2rem;
  margin-bottom: 4rem;
  grid-template-columns: 1fr;
  padding-bottom: 2rem;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 5px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    border-bottom: 0;
    padding-bottom: 0;
  }
`;

export const CardLeft = styled.div`
  justify-self: center;
  height: 100%;
  img {
    object-fit: cover;
  }
`;

export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    font-size: 1.5rem;
    font-weight: 400;
    color: #d9e7eb;
  }

  p {
    font-weight: 400;
    max-width: 95%;
    margin-top: 10px;
    margin-bottom: 1rem;
    color: #b0c6d3;
    text-align: center;

    @media (min-width: 992px) {
      text-align: start;
    }
  }
  @media (min-width: 992px) {
    align-items: flex-start;
    margin-top: 1rem;
  }
`;

// little trickry to adjust colors so made it a variable first
export const BtnGroup = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
// can delete everything below and button still function
.btn {
  --primary-color: #434f5e;
  --secondary-color: #002635;
  --hover-color: #a5c6d4;
  
  --btnon-color: #002635;
  --btnoff-color: #9FB0C8;

  --arrow-width: 10px;
  --arrow-stroke: 2px;

  color: var(--btnoff-color);
  background: var(--primary-color);
  display: flex;
  transition: 0.2s background;
  align-items: center;
  gap: 0.6em;
}

.btn .arrow-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn .arrow {
  margin-top: 1px;
  width: var(--arrow-width);
  background: var(--primary-color);
  height: var(--arrow-stroke);
  position: relative;
  transition: 0.2s;
}

.btn .arrow::before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  border: solid var(--btnoff-color);
  border-width: 0 var(--arrow-stroke) var(--arrow-stroke) 0;
  display: inline-block;
  top: -3px;
  right: 3px;
  transition: 0.2s;
  padding: 3px;
  transform: rotate(-45deg);
}

.btn:hover {
  background-color: var(--hover-color);
  color: var(--btnon-color);
}

.btn:hover .arrow {
  background: var(--btnon-color);
  
  
}

.btn:hover .arrow:before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  border: solid var(--btnon-color);
  border-width: 0 var(--arrow-stroke) var(--arrow-stroke) 0;
  display: inline-block;
  top: -3px;
  right: 0px;
  transition: 0.2s;
  padding: 3px;
  transform: rotate(-45deg);
  
}
  
`;

export const TechCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: 992px) {
    justify-content: flex-start;
  }
`;

export const TechCard = styled.div`
  border-radius: 10px;
  background-color: #465363;
  padding: 5px 10px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 400;
  color: rgba(159, 176, 200, 0.815);
  cursor: default;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
`;
