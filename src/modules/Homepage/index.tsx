import React from 'react';
import {
  AboardBtnWrapper,
  AboardWrapper,
  Header,
  HeaderResize,
  HomePageWrapper,
  ImageAboardWrapper,
  LearnBtnWrapper,
  TextAboardWrapper
} from './Home.styles';
import Image from 'next/image';
import { Box } from '@mui/material';
import LinkButton from '@/components/Button/Button';

export default function Homepage() {
  return (
    <>
      <HomePageWrapper>
        <Image
          src="/assets/tableText.jpg"
          alt="logo"
          width={1200} // natural width of the image
          height={400} // natural height
          style={{ width: '100%', height: 'auto' }} // makes it responsive
        />
        <LearnBtnWrapper>
          <LinkButton label="Learn More" href="/exam-desk" />
        </LearnBtnWrapper>
      </HomePageWrapper>

      <AboardWrapper>
        <TextAboardWrapper>
          <HeaderResize>ALL Aboard!</HeaderResize>
          <AboardBtnWrapper>
            <LinkButton label="Meet The Coodedbus Team" href="/about" />
          </AboardBtnWrapper>
        </TextAboardWrapper>

        <ImageAboardWrapper>
          <Image
            src="/assets/IMG_1.png"
            alt="logo"
            width={1200}
            height={300}
            style={{ width: '100%', height: 'auto' }}
          />
        </ImageAboardWrapper>
      </AboardWrapper>

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Header>{"Need Help? We've Got You Covered"}</Header>
      </Box>

      <Box
        my={'20px'}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%'
        }}
      >
        <LinkButton label="View Our Support" href="/support" />
      </Box>
    </>
  );
}
