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
          <Logo src="/assets/footer.jpg" alt="Codedbus Logo" />
        </Link>
        <FooterText>Codedbus Information Technology Limited</FooterText>
        <FooterText>
          <Link href={'/privacy'}>Privacy Policy</Link>
        </FooterText>
        <FooterText>
          <Link href={'/terms'}>Terms of Service</Link>
        </FooterText>
        <FooterText>
          <Link href={'/refund'}>Cancel and Refund Policy</Link>
        </FooterText>
        <SocialIcons>
          <a href="https://x.com/Codedbus" target="_blank" rel="noopener noreferrer">
            <FaXTwitter size={30} />
          </a>
          <a href="https://www.facebook.com/share/166NGf3aMr/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
            <FaFacebookF size={30} />
          </a>
          <a href="https://www.instagram.com/codedbus?igsh=MTg1cWNlNHU4YmwwcA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
          <a href="https://www.linkedin.com/company/codedbus-information-technology-limited/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn size={30} />
          </a>
          <a href="https://youtube.com/@codedbus?si=dP09QYIpvxhtGT74" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={30} />
          </a>
        </SocialIcons>

      </Column>

      <Column>
        <FooterTitle>Our Products</FooterTitle>
        <FooterText>
        <Link href="/exam-desk">Exam Desk</Link>
        </FooterText>
      </Column>

      <Column>
        <FooterTitle>Company</FooterTitle>
        <FooterText>
        <Link href="/about">About Codedbus Information Technology Limited</Link>
        </FooterText>
        <FooterText>
        <Link href="/team">Meet Our Team</Link>
        </FooterText>
      </Column>

      <Column>
        <FooterTitle>Support</FooterTitle>
        <FooterText>
        <Link href="/support">Product Support</Link>
        </FooterText>
         <FooterText>
        <Link href="/contact">Contact Us</Link>
        </FooterText>
      </Column>
    </FooterWrapper>
  );
}
