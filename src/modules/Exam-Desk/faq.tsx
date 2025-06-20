'use client';

import styled from '@emotion/styled';
import { useState } from 'react';

// Wrapper for the FAQ section
const FAQWrapper = styled.section`
  max-width: 900px;
  width: 100%;
  margin: 4rem auto;
  padding: 0 1rem;
  font-family: 'Arial', sans-serif;
`;

// Title
const FAQTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  text-align: center;
  color: #0c1b4f;
  margin-bottom: 2rem;
`;

// Each FAQ item
const FAQItem = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 1rem 0;
`;

// The clickable question button
const Question = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  color: #111;
`;

// The answer text
const Answer = styled.div`
  margin-top: 0.5rem;
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
`;

// Rotating icon with Emotion prop filter
const Icon = styled('span', {
  shouldForwardProp: (prop) => prop !== 'open'
})<{ open: boolean }>`
  font-size: 1.2rem;
  transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease;
`;

// FAQ data
const FAQData = [
  {
    question: 'What is Exam Desk?',
    answer: 'Exam Desk is a desktop software that runs on the Windows operating system.',
  },
  {
    question: 'What is the use of Exam Desk Portal?',
    answer:
      'The Exam Desk Portal is used by examiners to create, conduct, and manage examinations. Exam Desk is used by exam candidates to take exam.',
  },
  {
    question: 'Can Exam Desk work without an internet connection?',
    answer: 'No, an internet connection is required for Exam Desk to function.',
  },
  {
    question: 'How many exam candidates can take an exam?',
    answer: 'Unlimited on the Pro version, limited to 20 on the Beta version.',
  },
  {
    question: 'Does Exam Desk expire?',
    answer: 'Yes, and users will be required to download new versions when updates are available.',
  },
{
  question: 'Is there technical support available for Exam Desk users?',
  answer: (
    <>
      Yes, through email, live chat, and a dedicated help center.{' '}
      <a href="/contact" style={{ color: 'blue' }}>
        Visit the support page
      </a>.
    </>
  )
}

];

// Main component
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQWrapper>
      <FAQTitle>Frequently Asked Questions (FAQ)</FAQTitle>
      {FAQData.map((faq, index) => (
        <FAQItem key={index}>
          <Question onClick={() => toggleFAQ(index)}>
            {faq.question}
            <Icon open={openIndex === index}>▾</Icon>
          </Question>
          {openIndex === index && <Answer>{faq.answer}</Answer>}
        </FAQItem>
      ))}
    </FAQWrapper>
  );
}
