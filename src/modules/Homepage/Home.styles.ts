import styled from '@emotion/styled';

export const HomePageWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
  margin: 0 auto 100px auto;
  align-items: center;
  margin-top: 100px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 20px;
  }
`;

export const MainHeadder = styled.div`
  color: #000000;
  font-size: 56px;

 @media screen and (max-width: 768px) {
    font-size: 46px;
    margin-bottom: 20px;
  }
`;
export const LearnBtnWrapper = styled.div`
  width: 350px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 250px;
  }
`;

export const AboardWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 60%;
  margin: 0 auto 100px auto;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 20px;
    width: 80%;
  }
`;
export const SupportWrapper = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  height: auto;
  width: 70%;
  margin: 0 auto 100px auto;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 20px;
    width: 80%;
  }
`;


export const TextAboardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ImageAboardWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    max-width: 400px;

    @media screen and (max-width: 700px) {
      max-width: 300px;
      margin-top: 30px;
    }
  }
`;


export const HeaderResize = styled.div`
  font-weight: 900;
  font-size: 50px;
  margin-bottom: 20px;
  margin-top: 10%;

  @media screen and (max-width: 700px) {
      margin-top: 0;
    }
`;

export const AboardBtnWrapper = styled.div`
  @media screen and (max-width: 671px) {
    margin: 0 10px;
  }
`;

export const Header = styled.div`
  font-weight: 900;
  font-size: 40px;
  margin-bottom: 20px;

  @media screen and (max-width: 989px) {
    font-size: 40px;
  }
  @media screen and (max-width: 671px) {
    font-size: 30px;
  }
  @media screen and (max-width: 487px) {
    font-size: 15px;
    margin-bottom: 0;
  }
`;
