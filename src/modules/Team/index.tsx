"use client"

import styled from '@emotion/styled'
import Image from 'next/image'
import React from 'react'
import TeamInfo from './TeamInfo';


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
  font-size: 30px;
  padding: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: start;
  flex-direction: column;
    word-wrap: break-word;
  h1 {
    font-weight: bold;
    margin-bottom: 1rem;
  }

  p {
    font-size: 26px;
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

export default function Team() {
  return (
    <>
    <Container>
      <TextSection>
        <h1>Our Team</h1>
        <p>Meet the team driving Codedbus to it goal.</p>
      </TextSection>

      <ImageSection>
        <Image src="/assets/4.jpg" alt="Coded Bus Download" width={700} height={400} style={{ width: '100%', height: 'auto' }} />
      </ImageSection>
    </Container>
    <TeamInfo/>
    </>
  )
}
