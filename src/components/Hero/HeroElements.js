import styled from "styled-components";

export const HeroContainer = styled.div`
  padding-bottom: 2rem;
  padding-top: 9.5rem;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1000px;
  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

//for smartphones only
export const HeroFirst = styled.div`
  display: none;
  @media screen and (max-width: 992px) {
    display: block;
    flex: 1;
    justify-content: center;
    display: flex;
    margin-top: 2rem;
}

`;

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  flex: 1;

  h1 {
    font-size: 2.8rem;
    color: #b7cfdd;
    opacity: 0.98;
    font-weight: 400;
  }

  h5 {
    font-size: 1.6rem;
    color: #8a9da6;
    margin-bottom: 1rem;
    font-weight: 400;
  }

  p {
    font-size: 17px;
    color: #f6f6f6;
    opacity: 0.85;
  }



    h5 {
      min-height: 5rem;
  }

    @media screen and (max-width: 992px) {
    text-align: center;
    align-items: center;
    margin-bottom: 7rem;
`;

//for big screens 
export const HeroRight = styled.div`
  flex: 1;
  justify-content: center;
  display: flex;
    @media screen and (max-width: 992px)  {
    display: none
  }
`;

export const Image = styled.img`
margin-top: 10px;
  height: 300px;
  width: auto;
@media screen and (max-width: 992px)  {
    max-width: 200px;
    max-height: 200px;
    margin-bottom: 6rem;
  }
`;



