'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Buttons, Content, ImageWrapper, Section } from './Styles';
import ExamManagementSection from './ExamManagementSection';

export default function ExamDeskSection() {
  return (

    <>
    <Section>
      <ImageWrapper>
        <Image
          src="/assets/table.jpg"
          alt="logo"
          width={300}
          height={300}
          style={{ width: '100%', height: 'auto' }}
        />
      </ImageWrapper>
      <Content>
        <h1>Exam Desk</h1>
        <h2>Simple Examination Management Software</h2>
        <hr />
        <p>Download Exam Desk</p>
        <Buttons>
          <Link href="/download">For Examiners</Link>
          <Link href="/download">For Exam Candidates</Link>
        </Buttons>
      </Content>
    </Section>
    <ExamManagementSection/>
    </>

  );
}
