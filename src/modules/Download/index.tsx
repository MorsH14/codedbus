"use client"

import styled from '@emotion/styled';
import Image from 'next/image';
import CodedBusImage from '../../../public/assets/IMG_5.png'; 


const Container = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  padding: 4rem 2rem;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 646px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const TextSection = styled.div`
  font-size: 16px;
  padding: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: end;
  flex-direction: column;
    word-wrap: break-word;
  h1 {
    font-weight: bold;
    margin-bottom: 1rem;
  }

  p {
    font-size: 16px;
    color: #333;
  }
   @media screen and (max-width: 646px) {
    display: flex;
    justify-content: center;
    align-items: start;
  }
`;

const ImageSection = styled.div`
  max-width: 700px;
  width: 100%;

  img {
    width: 100%;
    height: auto;
  }
`;

export default function DownloadPage() {
  return (
    <Container>
      <TextSection>
        <h1>Thanks for downloading our software!</h1>
        <p>Your download will begin automatically.</p>
      </TextSection>

      <ImageSection>
        <Image src={CodedBusImage} alt="Coded Bus Download" layout="responsive" />
      </ImageSection>
    </Container>
  );
}
