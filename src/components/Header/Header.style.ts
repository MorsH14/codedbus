'use client';

import styled from '@emotion/styled';

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  z-index: 9999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 120px;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    padding: 0 60px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const HeaderLinksWrapper = styled.div<{ isMobileOpen: boolean }>`
  display: flex;
  gap: 24px;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ isMobileOpen }) => (isMobileOpen ? 'flex' : 'none')};
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    flex-direction: column;
    background-color: white;
    padding: 20px 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 9998;
  }
`;

interface NavLinkProps {
  isActive: boolean;
}

export const NavLink = styled.a<NavLinkProps>`
  text-decoration: none;
  color: black;
  padding-bottom: 4px;
  border-bottom: ${({ isActive }) => (isActive ? '2px solid #362f8f' : 'none')};
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  transition: border-bottom 0.3s;

  &:hover {
    border-bottom: 2px solid #362f8f;
  }
`;

export const MobileMenuIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 28px;

  @media (max-width: 768px) {
    display: block;
  }
`;
