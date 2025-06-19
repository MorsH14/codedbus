'use client';

import styled from '@emotion/styled';
import Link from 'next/link';

export const Section = styled.section`
  text-align: center;
  padding: 60px 20px;
  max-width: 80%;
  margin: 0 auto;
`;

export const Heading = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #000;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const CenteredImage = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;

  img {
    max-width: 300px;
    height: auto;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 330px;

  }
`;

export const DownloadCard = styled.div`
  flex: 1;
  max-width: 320px;
  padding: 20px;
  background: white;
  border-radius: 12px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center; 
`;

export const DownloadText = styled.p`
  font-size: 1rem;
  margin-bottom: 16px;
  color: #000;
`;

export const DownloadButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #001f5c;
  color: white;
  padding: 12px 20px;
  border-radius: 999px;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.3s;
  width: max-content; // 

  &:hover {
    background-color: #000e36;
  }
`;

