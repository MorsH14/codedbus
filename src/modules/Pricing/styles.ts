'use client';

import styled from '@emotion/styled';
import Link from 'next/link';

export const Section = styled.section`
  padding: 60px 20px;
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #001A59;
  margin-bottom: 10px;
`;

export const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 40px;
`;

export const AccountTypeRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

export const AccountTypeOption = styled.button<{ active?: boolean }>`
  padding: 10px 20px;
  border-radius: 999px;
  border: 2px solid ${({ active }) => (active ? '#001A59' : '#ccc')};
  background-color: ${({ active }) => (active ? '#001A59' : 'transparent')};
  color: ${({ active }) => (active ? 'white' : '#001A59')};
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #001A59;
    color: white;
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: stretch;
  }
`;

export const PricingCard = styled.div`
  flex: 1;
  background: white;
  padding: 30px 20px;
  border: 1px solid #001A59;
  border-radius: 12px;
  /* box-shadow: 0px 4px 15px rgba(0,0,0,0.05); */
  max-width: 400px;
  min-height: 500px; /* Ensures same height */
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const RecommendedTag = styled.div`
  position: absolute;
  top: -15px;
  right: 20px;
  background-color: #001A59;
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.8rem;
`;

export const PlanTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  background: #001A59;
  color: #FFFFFF;
  margin-bottom: 20px;
  width: 200px;
  padding: 12px 0;
  `;

export const FeatureList = styled.ul`
  text-align: left;
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
`;

export const FeatureItem = styled.li`
  margin-bottom: 10px;
  &:before {
    content: '✔';
    color: #001A59;
    margin-right: 10px;
  }
`;

export const Calculator = styled.div`
  border-top: 3px solid #001a59;
  padding-top: 20px;
  margin-top: 10px;
  text-align: left;

  p {
    font-weight: 500;
    margin-bottom: 15px;
  }
`;

export const CalculatorRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;
  font-size: 0.95rem;

  input {
    width: 50px;
    text-align: center;
    margin-right: 8px;
    border: 1px solid #ccc;
    padding: 3px;
    border-radius: 4px;
  }

  button {
    width: 25px;
    height: 25px;
    border: none;
    background-color: #001A59;
    color: white;
    border-radius: 5px;
    margin: 0 5px;
    cursor: pointer;
    font-weight: bold;
  }
`;

export const PriceTotal = styled.div`
  font-weight: 700;
  font-size: 1.1rem;
  color: #001A59;
  margin-top: 15px;
`;

export const DownloadButton = styled(Link)`
  display: block;
  background-color: #001A59;
  color: white;
  padding: 12px 20px;
  border-radius: 999px;
  font-weight: 500;
  text-decoration: none;
  margin-top: 20px;
  text-align: center;
  transition: background 0.3s;

  &:hover {
    background-color: #000e36;
  }
`;

export const Note = styled.p`
  font-size: 0.8rem;
  color: #666;
  margin-top: 15px;
  text-align: left;
`;
export const PriceHeader = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: #555;
  margin-bottom: 5px;
`;

export const PriceText = styled.div`
  font-size: 26px;
  font-weight: 900;
  color: #000000;
`;
export const PriceTextSmall = styled.div`
  font-size: 13px;
  color: #000000;
  margin-bottom: 30px;
`;
export const Span = styled.div`
  padding: 6px 0;
`;

export const CounterWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
`;

export const Tspan = styled.button`
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  line-height: 1;
`;

export const CounterValue = styled.span`
  min-width: 40px;
  text-align: center;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  padding: 4px 0;
`;