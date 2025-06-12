"use client"

import styled from '@emotion/styled';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  font-family: 'Arial', sans-serif;
  background-color: #fff;
  min-height: 100vh;
`;

const TextSection = styled.div`
  max-width: 80%;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #392c88;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    color: #000;
    font-weight: bold;
    margin-bottom: 1rem;
  }
`;

const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2rem auto;
  flex-wrap: wrap;
`;

const Box = styled.div`
  background-color: #f5f5f5;
  width: 250px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  border-radius: 10px;
`;

const GreenText = styled.span`
  color: #00a651;
`;

const YellowText = styled.span`
  color: #dddd55;
`;

const BlueText = styled.span`
  color: #392c88;
`;

const TableSection = styled.div`
  width: 100%;
  background-color: #f5f5f5;
  padding: 2rem;
  margin-top: 50px;
`;

const TableTitle = styled.h2`
  font-size: 2rem;
  color: #392c88;
  margin-bottom: 1rem;
  text-align: center;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  text-align: left;
  padding: 1rem;
  border: 2px solid #ddd;
  background-color: #e5e5e5;
`;

const Td = styled.td`
  padding: 1rem;
  border: 2px solid #ddd;
  background-color: #fff;
`;
const FaqSection = styled.div`
  margin-top: 4rem;
`;


export default function ExamManagementSection() {
  return (
    <Container>
      <TextSection>
        <h1>Easy Examination Management</h1>
        <p>
          Exam Desk is a software for the Windows operating system (OS) that can be used by examiners to create, conduct, and manage
          examination of exam candidates. This software is secure and simple to use for examination purposes.
        </p>
        <p>
          The software can be downloaded by examiners and their examination candidates.
        </p>
      </TextSection>

      <BoxContainer>
        <Box><GreenText>Create Examination</GreenText></Box>
        <Box><YellowText>Conduct Examination</YellowText></Box>
        <Box><BlueText>Manage Examination</BlueText></Box>
      </BoxContainer>

      <TableSection>
        <TableTitle>System Requirements</TableTitle>
        <Table>
          <tbody>
            <tr>
              <Th>Operating System (OS)</Th>
              <Td>Windows 11 or Windows 10 (Version 21H2 or later), 64-bit, with latest Updates</Td>
            </tr>
            <tr>
              <Th>Processor (CPU)</Th>
              <Td>Intel Core i3/5/7/9 or AMD Ryzen 3/5/7/9/Threadripper, EPYC</Td>
            </tr>
            <tr>
              <Th>Memory (RAM)</Th>
              <Td>8 GB RAM</Td>
            </tr>
            <tr>
              <Th>Storage Space</Th>
              <Td>2 GB hard disk space for application and installation files</Td>
            </tr>
            <tr>
              <Th>Display</Th>
              <Td>1080p (1920×1080) or higher resolution</Td>
            </tr>
            <tr>
              <Th>Required Devices</Th>
              <Td>Mouse, keyboard or multi-touch screen</Td>
            </tr>
            <tr>
              <Th>Internet Connection</Th>
              <Td>Yes, internet connection is required to run the software</Td>
            </tr>
            <tr>
              <Th>.Net Framework</Th>
              <Td>Some features may require .NET 3.5 or 4.6 and higher to also be installed</Td>
            </tr>
          </tbody>
        </Table>
      </TableSection>

      <FaqSection>
        <TableTitle>Frequently Asked Question(FAQ)</TableTitle>
      </FaqSection>
    </Container>
  );
}
