'use client'

import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { FaArrowUp } from 'react-icons/fa'

const Button = styled.button`
  position: fixed;
  bottom: 274px;
  right: 24px;
  background-color: #362f8f;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 50%;
  cursor: pointer;
  transition: opacity 0.3s ease;
  z-index: 1000;

  svg {
    font-size: 16px;
  }

  &:hover {
    background-color: #2c2675;
  }

  @media (max-width: 250px) {
    display: none;
  }
`

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Button
      onClick={scrollToTop}
      aria-label="Back to top"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <FaArrowUp />
    </Button>
  )
}
