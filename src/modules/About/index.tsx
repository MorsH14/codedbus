"use client";

import styled from '@emotion/styled';
import Image from 'next/image';
import CodedBusImage from '../../../public/assets/IMG_1.jpg'; 
import WaveImage from '../../../public/assets/2.jpg'; 
import LinkButton from '@/components/Button/Button';

const Container = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  padding: 4rem;
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
  padding-right: 100px;
  word-wrap: break-word;

  h1 {
    margin-bottom: 1rem;
    font-weight: 900;
  }

  p {
    font-size: 16px;
    color: #333;
  }

  @media screen and (max-width: 646px) {
    display: flex;
    justify-content: center;
    align-items: start;
    padding: 0;
    margin-bottom: 20px;
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

const WelcomeSection = styled.div`
  background-color: #fff;
  text-align: center;
  padding: 4rem 2rem;

  h1 {
    font-size: 2.5rem;
    font-weight: 900;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    max-width: 900px;
    margin: 0 auto 1rem;
  }
`;

const JourneySection = styled.div`
  background-image: url("/assets/3.jpg");
  color: #fff;
  padding: 4rem 2rem;
  text-align: center;

  h2 {
    font-size: 2rem;
    font-style: italic;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    max-width: 900px;
    margin: 0 auto 1rem;
  }
`;

export default function AboutSection() {
  return (
    <>
      <Container>
        <TextSection>
          <h1>{`Hello! We're glad you're riding with us.`}</h1>
          <p>Our goal is to visualize and accomplish.</p>
        </TextSection>

        <ImageSection>
          <Image src={CodedBusImage} alt="Coded Bus Download" layout="responsive" />
        </ImageSection>
      </Container>

      <WelcomeSection>
        <h1>Welcome aboard!</h1>
        <p>
          {`We're excited to share our journey with you. As a leading information technology company in Nigeria, we're driving innovation and pushing boundaries. Our mission is to simplify complex tasks through cutting-edge coding solutions. Sit back, relax, and enjoy the ride – you've already boarded the journey by choosing our products!`}
        </p>
      </WelcomeSection>

      <JourneySection>
        <h2>How far will our journey take you?</h2>
        <p>
          {`At Codedbus, we're driven by creativity and innovation. Explore our platform – packed with cutting-edge code solutions designed to boost your productivity. Wherever your goals take you, we're here to help you ride smoothly and efficiently.`}
        </p>
      </JourneySection>

      <Container>
        <TextSection>
          <h1>Drivers of Creativity and Innovation.</h1>
          <LinkButton label="Meet our team" href="/team" />
        </TextSection>

        <ImageSection>
          <Image src={WaveImage} alt="Coded Bus Download" layout="responsive" />
        </ImageSection>
      </Container>
    </>
  );
}
