'use client';

import Image from 'next/image';
import {
  Section,
  Heading,
  CenteredImage,
  ButtonRow,
  DownloadCard,
  DownloadText,
  DownloadButton,
} from './Styles';
import { FiDownload } from "react-icons/fi";
import ExamManagementSection from './ExamManagementSection';


export default function ExamDeskSection() {
  return (
    <>
    <Section>
      <Heading>Simple Examination Management Software</Heading>

      <CenteredImage>
        <Image
          src="/assets/table.jpg"
          alt="Exam Desk"
          width={300} 
          height={300}
        />
      </CenteredImage>

      <ButtonRow>
        <DownloadCard>
          <DownloadText>
            Do you want to create, conduct and manage examination?
          </DownloadText>
          <DownloadButton href="/download">
            <FiDownload size={20} />
            Download Exam Desk Portal
          </DownloadButton>
        </DownloadCard>

        <DownloadCard>
          <DownloadText>Do you want to take an examination?</DownloadText>
          <DownloadButton href="/download">
            <FiDownload size={20} />
            Download Exam Desk
          </DownloadButton>
        </DownloadCard>
      </ButtonRow>
    </Section>
    <ExamManagementSection/>
    </>
  );
}
