'use client';

import React from 'react';
import {
  AboardBtnWrapper,
  AboardWrapper,
  Header,
  HeaderResize,
  HomePageWrapper,
  ImageAboardWrapper,
  LearnBtnWrapper,
  MainHeadder,
  SupportWrapper,
  TextAboardWrapper
} from './Home.styles';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import LinkButton from '@/components/Button/Button';

export default function Homepage() {
  return (
    <>
      {/* Top section with text and table image */}
      <HomePageWrapper>
        <TextAboardWrapper>
          <MainHeadder>
            Simple <br />
            Examination <br />
            Management <br />
            Software
          </MainHeadder>
          <LearnBtnWrapper>
            <LinkButton label="Learn More" href="/exam-desk" />
          </LearnBtnWrapper>
        </TextAboardWrapper>

        <ImageAboardWrapper>
          <Image
            src="/assets/table.jpg" // Make sure this path matches your public folder
            alt="Exam Desk Illustration"
            width={600}
            height={400}
          />
        </ImageAboardWrapper>
      </HomePageWrapper>

      {/* Team section */}
      <AboardWrapper>
        <TextAboardWrapper>
          <HeaderResize>ALL Aboard!</HeaderResize>
          <AboardBtnWrapper>
            <LinkButton label="Meet The Codedbus Team" href="/about" />
          </AboardBtnWrapper>
        </TextAboardWrapper>

        <ImageAboardWrapper>
          <Image
            src="/assets/IMG_1.jpg"
            alt="logo"
            width={1200}
            height={300}
            style={{ width: '100%', height: 'auto', maxWidth: '600px' }}
          />
        </ImageAboardWrapper>
      </AboardWrapper>

      {/* Support section */}
      <SupportWrapper>
        <ImageAboardWrapper>
          <Image
            src="/assets/wave.jpg"
            alt="logo"
            width={1200}
            height={300}
            style={{ width: '100%', height: 'auto', maxWidth: '600px' }}
          />
        </ImageAboardWrapper>

        <TextAboardWrapper>
          <Header>Need Help?</Header>
          <Header>We&apos;ve Got You Covered</Header>

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
        </TextAboardWrapper>
      </SupportWrapper>
    </>
  );
}
