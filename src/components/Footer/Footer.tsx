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
        <Logo src="/assets/footer.jpg" alt="Codedbus Logo"  />
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
          <Link href="https://x.com/Codedbus"><FaXTwitter size={30}/></Link>
          <Link href="https://www.facebook.com/share/166NGf3aMr/?mibextid=wwXIfr "><FaFacebookF size={30}/></Link>
          <Link href="https://www.instagram.com/codedbus?igsh=MTg1cWNlNHU4YmwwcA%3D%3D&utm_source=qr"><FaInstagram size={30}/></Link>
          <Link href="https://www.linkedin.com/company/codedbus-information-technology-limited/"><FaLinkedinIn size={30} /></Link>
          <Link href="https://youtu.be/y3KKGKhV3yA"><FaYoutube size={30}/></Link>
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
