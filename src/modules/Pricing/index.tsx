'use client';

import { useState } from 'react';
import {
  Section,
  Title,
  Subtitle,
  AccountTypeRow,
  AccountTypeOption,
  CardsWrapper,
  PricingCard,
  PlanTitle,
  FeatureList,
  FeatureItem,
  Calculator,
  CalculatorRow,
  DownloadButton,
  RecommendedTag,
  Note,
  CardContent,
  PriceText,
  PriceTextSmall,
  Span,
  CounterWrapper,
  CounterValue
} from './styles';
import { Box } from '@mui/material';

export default function PricingSection() {
  const [accountType, setAccountType] = useState('individual');

  // INDIVIDUAL plan state
  const [examCount] = useState(1);
  const [candidateCount, setCandidateCount] = useState(100);
  const EXAM_PRICE = 2500;
  const CANDIDATE_PRICE = 500;
  const individualTotal = (examCount * EXAM_PRICE) + (candidateCount * CANDIDATE_PRICE);

  // ENTERPRISE plan state
  const [monthlyUsers, setMonthlyUsers] = useState(5);
  const [annualUsers, setAnnualUsers] = useState(5);
  const MONTHLY_PRICE = 1000;
  const ANNUAL_PRICE = 10000;
  const monthlyTotal = monthlyUsers * MONTHLY_PRICE;
  const annualTotal = annualUsers * ANNUAL_PRICE;

  return (
    <Section>
      <Title>Simple and Transparent Pricing</Title>
      <Subtitle>You&apos;re in control of setting the price. Take control...</Subtitle>

      {/* Toggle */}
      <AccountTypeRow>
        <AccountTypeOption
          active={accountType === 'individual'}
          onClick={() => setAccountType('individual')}
        >
          Individual Account
        </AccountTypeOption>
        <AccountTypeOption
          active={accountType === 'enterprise'}
          onClick={() => setAccountType('enterprise')}
        >
          Enterprise Account
        </AccountTypeOption>
      </AccountTypeRow>

      {/* INDIVIDUAL CARDS */}
      {accountType === 'individual' && (
        <CardsWrapper>
          {/* FREE PLAN */}
          <PricingCard>
            <CardContent>
              <Box display={"flex"} justifyContent={'center'} alignItems={'center'}>
                <PlanTitle>FREE</PlanTitle>
              </Box>
              <FeatureList>
                <FeatureItem>1 Exam</FeatureItem>
                <FeatureItem>1 Exam Group</FeatureItem>
                <FeatureItem>5 Exam Candidates</FeatureItem>
                <FeatureItem>Maximum 30 Exam Questions</FeatureItem>
                <FeatureItem>24/7 Support Assistance</FeatureItem>
              </FeatureList>
            </CardContent>
            <DownloadButton href="/download">Download Exam Desk Portal</DownloadButton>
          </PricingCard>

          {/* STANDARD PLAN */}
          <PricingCard>
            <RecommendedTag>Recommended</RecommendedTag>
            <CardContent>
              <Box display={"flex"} justifyContent={'center'} alignItems={'center'}>
                <PlanTitle>STANDARD</PlanTitle>
              </Box>
              <FeatureList>
                <FeatureItem>1 Exam</FeatureItem>
                <FeatureItem>1 Exam Group</FeatureItem>
                <FeatureItem>Unlimited Number of Exam Candidates</FeatureItem>
                <FeatureItem>Maximum 100 Exam Questions</FeatureItem>
                <FeatureItem>24/7 Support Assistance</FeatureItem>
              </FeatureList>

              <Calculator>
                <p style={{ textAlign: 'center', fontSize: "14px", padding: '20px 0' }}>Take control of what you pay</p>
                <CalculatorRow>
                  <span>Exam</span>
                  <span>1</span>
                  <span>
                    &#8358;{EXAM_PRICE.toLocaleString()}
                  </span>
                </CalculatorRow>



                <CalculatorRow>
                  <span>Number of Exam Candidates</span>
                  <CounterWrapper>
                    <span style={{ fontSize: '18px', padding: '0 7px', cursor: 'pointer' }} onClick={() => setCandidateCount(c => Math.max(0, c - 1))}>
                      -
                    </span>
                    <CounterValue>{candidateCount}</CounterValue>
                    <span style={{ fontSize: '18px', padding: '0 7px', cursor: 'pointer' }} onClick={() => setCandidateCount(c => c + 1)}>
                      +
                    </span>
                  </CounterWrapper>

                  <span style={{ marginLeft: '8px' }}>
                    &#8358;{CANDIDATE_PRICE.toLocaleString()}
                  </span>
                </CalculatorRow>

                <CalculatorRow>
                  <Span>
                    You Pay:
                  </Span>
                  <Span>
                    &#8358;{individualTotal.toLocaleString()}
                  </Span>
                </CalculatorRow>
              </Calculator>
            </CardContent>
            <DownloadButton href="/download">Download Exam Desk Portal</DownloadButton>
            <Note>Note: This calculator provides an estimate based on the inputs you selected.</Note>
          </PricingCard>
        </CardsWrapper>
      )}

      {/* ENTERPRISE CARDS */}
      {accountType === 'enterprise' && (
        <CardsWrapper>
          {/* MONTHLY PLAN */}
          <PricingCard>
            <CardContent>
              <Box display={"flex"} justifyContent={'center'} alignItems={'center'}>
                <PlanTitle>Monthly</PlanTitle>
              </Box>
              <PriceText>&#8358;1,000</PriceText>
              <PriceTextSmall>Per User/Monthly</PriceTextSmall>
              <FeatureList>
                <FeatureItem>24/7 Support Assistance</FeatureItem>
                <FeatureItem>Admin can manage User Accounts</FeatureItem>
              </FeatureList>

              <Calculator>
                <p style={{ textAlign: 'center', fontSize: "14px", padding: '20px 0' }}>Take control of what you pay</p>
                <CalculatorRow>
                  <span>Number of Users:</span>
                  <CounterWrapper>
                    <span style={{ fontSize: '18px', padding: '0 7px', cursor: 'pointer' }} onClick={() => setMonthlyUsers(u => Math.max(1, u - 1))}>
                      -
                    </span>
                    <CounterValue>{annualUsers}</CounterValue>
                    <span style={{ fontSize: '18px', padding: '0 7px', cursor: 'pointer' }} onClick={() => setMonthlyUsers(u => u + 1)}>
                      +
                    </span>
                  </CounterWrapper>

                  <span style={{ marginLeft: '8px' }}>
                    &#8358;{MONTHLY_PRICE.toLocaleString()}
                  </span>
                </CalculatorRow>
                 <CalculatorRow>
                  <Span>
                    You Pay:
                  </Span>
                  <Span>
                    &#8358;{monthlyTotal.toLocaleString()}
                  </Span>
                </CalculatorRow>
              </Calculator>
            </CardContent>
            <DownloadButton href="/download">Download Exam Desk Portal</DownloadButton>
            <Note>Note: This calculator provides an estimate based on the inputs you selected.</Note>
          </PricingCard>

          {/* ANNUAL PLAN */}
          <PricingCard>
            <RecommendedTag>Recommended</RecommendedTag>
            <CardContent>
              <Box display={"flex"} justifyContent={'center'} alignItems={'center'}>
                <PlanTitle>Annually</PlanTitle>
              </Box>
              <PriceText>&#8358;10,000</PriceText>
              <PriceTextSmall>Per User/Annually</PriceTextSmall>
              <FeatureList>
                <FeatureItem>24/7 Support Assistance</FeatureItem>
                <FeatureItem>Admin can manage User Accounts</FeatureItem>
              </FeatureList>


              <Calculator>
                <p style={{ textAlign: 'center', fontSize: "14px", padding: '20px 0' }}>Take control of what you pay</p>
                <CalculatorRow>
                  <span>Number of Users:</span>
                  <CounterWrapper>
                    <span style={{ fontSize: '18px', padding: '0 7px', cursor: 'pointer' }} onClick={() => setAnnualUsers(u => Math.max(1, u - 1))}>
                      -
                    </span>
                    <CounterValue>{annualUsers}</CounterValue>
                    <span style={{ fontSize: '18px', padding: '0 7px', cursor: 'pointer' }} onClick={() => setAnnualUsers(u => u + 1)}>
                      +
                    </span>
                  </CounterWrapper>

                  <span style={{ marginLeft: '8px' }}>
                    &#8358;{ANNUAL_PRICE.toLocaleString()}
                  </span>
                </CalculatorRow>
                 <CalculatorRow>
                  <Span>
                    You Pay:
                  </Span>
                  <Span>
                    &#8358;{annualTotal.toLocaleString()}
                  </Span>
                </CalculatorRow>
              </Calculator>
            </CardContent>
            <DownloadButton href="/download">Download Exam Desk Portal</DownloadButton>
            <Note>Note: This calculator provides an estimate based on the inputs you selected.</Note>
          </PricingCard>
        </CardsWrapper>
      )}
    </Section>
  );
}
