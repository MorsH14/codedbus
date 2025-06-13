"use client";
import React from "react";
import {
  FooterWrapper,
  Column,
  Logo,
  FooterTitle,
  FooterText,
  SocialIcons,
} from "./Footer.styles";
import Link from "next/link";
import { FaXTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <FooterWrapper>
      <Column>
        <Link href={'/'}>
        <Logo src="/assets/logo.jpg" alt="Codedbus Logo"  />
        </Link>
        <FooterText>Codedbus Information Technology Limited</FooterText>
        <FooterText>Company Registration Number : 8220419</FooterText>
        <SocialIcons>
          <Link href="#"><FaXTwitter size={30}/></Link>
          <Link href="#"><FaFacebookF size={30}/></Link>
          <Link href="#"><FaInstagram size={30}/></Link>
          <Link href="#"><FaLinkedinIn size={30} /></Link>
          <Link href="#"><FaYoutube size={30}/></Link>
        </SocialIcons>
      </Column>

      <Column>
        <FooterTitle>Our Products</FooterTitle>
        <Link href="/exam-desk">Exam Desk</Link>
      </Column>

      <Column>
        <FooterTitle>Company</FooterTitle>
        <Link href="/about">About Codedbus Information Technology Limited</Link>
        <Link href="/team">Meet Our Team</Link>
      </Column>

      <Column>
        <FooterTitle>Support</FooterTitle>
        <Link href="/support">Product Support</Link>
        <Link href="/contact">Contact Us</Link>
      </Column>
    </FooterWrapper>
  );
}
