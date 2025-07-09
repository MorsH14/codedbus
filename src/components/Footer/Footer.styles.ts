"use client";
import styled from "@emotion/styled";

export const FooterWrapper = styled.footer`
  background-color: #000;
  color: white;
  padding: 40px 5vw;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 24px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  word-wrap: break-word;
`;

export const Logo = styled.img`
  width: 100px;
  height: auto;
  margin: 0 auto 16px auto;

  @media (max-width: 400px) {
    width: 80px;
  }
`;

export const FooterTitle = styled.h4`
  font-weight: bold;
  margin-bottom: 4px;
  font-size: 16px;

  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

export const FooterText = styled.p`
  margin: 0;
  font-size: 13px;
  color: #ccc;
  word-wrap: break-word;

  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

interface SocialIconsProps {
  center?: boolean;
}
export const SocialIcons = styled.div<SocialIconsProps>`
  display: flex;
  justify-content: ${({ center }) => (center ? 'center' : 'flex-start')};
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 16px;
  width: 100%;

  a {
    color: white;
    font-size: 18px;

    @media (max-width: 400px) {
      font-size: 16px;
    }
  }

  @media (max-width: 768px) {
    justify-content: center; /* Always center on mobile */
  }
`;
