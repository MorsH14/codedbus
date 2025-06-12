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
} from './Header.style';

const HeaderLink = [
  { label: 'Exam Desk', href: '/exam-desk' },
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
        <Image src="/assets/logo.jpg" alt="logo" width={100} height={50} />
      </Link>

      <MobileMenuIcon onClick={toggleMenu}>
        {isMobileOpen ? <HiX /> : <HiMenu />}
      </MobileMenuIcon>

      <HeaderLinksWrapper isMobileOpen={isMobileOpen}>
        {HeaderLink.map((link, index) => (
          <Link href={link.href} key={index} passHref>
            <NavLink
              isActive={currentPath === link.href}
              onClick={() => setIsMobileOpen(false)} // close menu on click
            >
              {link.label}
            </NavLink>
          </Link>
        ))}
      </HeaderLinksWrapper>
    </HeaderWrapper>
  );
}
