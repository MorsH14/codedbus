'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { HiMenu, HiX } from 'react-icons/hi';
import {
  HeaderWrapper,
  HeaderLinksWrapper,
  NavLink,
  MobileMenuIcon,
  HideOnMobile,
} from './Header.style';
import { Box } from '@mui/material';

const HeaderLink = [
  { label: 'Exam Desk', href: '/exam-desk' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About Us', href: '/about' },
  { label: 'Support', href: '/support' },
];

export default function Header() {
  const currentPath = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMenu = () => setIsMobileOpen((prev) => !prev);

  return (
    <HeaderWrapper>
      <Link href="/">
        <Image src="/assets/header.jpg" alt="logo" width={100} height={50} />
      </Link>

      <MobileMenuIcon onClick={toggleMenu}>
        {isMobileOpen ? <HiX /> : <HiMenu />}
      </MobileMenuIcon>

      <HeaderLinksWrapper isMobileOpen={isMobileOpen}>
        {HeaderLink.map((link, index) => {
          let isActive = currentPath === link.href;

          if (link.href === '/exam-desk') {
            isActive = ['/exam-desk', '/download'].includes(currentPath);
          }

          if (link.href === '/about') {
            isActive = ['/about', '/team'].includes(currentPath);
          }
          if (link.href === '/support') {
            isActive = ['/support', '/contact', '/refund', '/privacy', '/terms'].includes(currentPath);
          }

          return (
            <Link href={link.href} key={index} passHref>
              <NavLink
                isActive={isActive}
                onClick={() => setIsMobileOpen(false)}
              >
                {link.label}
              </NavLink>
            </Link>
          );
        })}
      </HeaderLinksWrapper>
        <HideOnMobile>
      <Box width={'2'}></Box>
        </HideOnMobile>
    </HeaderWrapper>
  );
}
