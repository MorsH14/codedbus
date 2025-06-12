'use client';

import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 60px 40px;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 20px;
    text-align: center;
  }

  @media (max-width: 400px) {
    padding: 20px 10px;
    gap: 20px;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  background-color: white;
  padding: 40px;

  img {
    width: 100%;
    max-width: 300px;
    height: auto;
  }

  @media (max-width: 400px) {
    padding: 20px;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 12px;
    text-align: center;
  }

  h2 {
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 16px;
    text-align: center;
  }

  hr {
    border: none;
    border-bottom: 2px solid #362f8f;
    width: 100%;
    max-width: 300px;
    margin: 16px 0;
  }

  p {
    font-size: 1rem;
    margin-bottom: 20px;
  }

  @media (max-width: 400px) {
    h1 {
      font-size: 1.6rem;
    }

    h2 {
      font-size: 1rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;

  a {
    background-color: #362f8f;
    color: white;
    padding: 12px 18px;
    border-radius: 4px;
    text-decoration: none;
    font-weight: bold;
    text-align: center;
    white-space: nowrap;

    &:hover {
      background-color: #2c2675;
    }
  }

  @media (max-width: 400px) {
    a {
      width: 100%;
    }
  }
`;
