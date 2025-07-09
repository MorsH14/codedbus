"use client";

import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";

interface LinkButtonProps {
  label: string
  href: string
  width?: string
  bgColor?: string
  textColor?: string
}

const StyledLink = styled.a<{ width?: string; bgColor?: string; textColor?: string }>`
  display: inline-block;
  background-color: ${({ bgColor }) => bgColor || '#001A59'};
  color: ${({ textColor }) => textColor || 'white'};
  font-weight: bold;
  text-align: center;
  padding: 16px 24px;
  width: ${({ width }) => width || '100%'};
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    filter: brightness(0.9);
  }
`


export default function LinkButton({ label, href, width, bgColor, textColor }: LinkButtonProps) {
  return (
    <Link href={href} passHref>
      <StyledLink width={width} bgColor={bgColor} textColor={textColor}>
        {label}
      </StyledLink>
    </Link>
  )
}