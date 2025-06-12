"use client"

import styled from '@emotion/styled';

export const HomePageWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  padding: 0;
  margin: 0 auto;
  position: relative;
/* 
  img {
    display: block;
    max-width: 100%;
    height: auto;
  } */
`;
export const LearnBtnWrapper = styled.div`
 position: absolute;
 bottom: 50px;
 left: 100px;
 width: 300px;
 margin: 0 auto;

 @media screen and (max-width: 1115px){
    bottom: 50px;
    left: 70px;
     width: 280px;
 }
 @media screen and (max-width: 899px){
    bottom: 30px;
    left: 30px;
     width: 220px;
 }
 @media screen and (max-width: 671px){
    bottom: 10px;
    left: 20px;
     width: 180px;
     font-size: 10px;
 }
 @media screen and (max-width: 413px){
    bottom: 10px;
    left: 10px;
     width: 80px;
     height: 25px;
     font-size: 10px;
 }
`;

export const AboardWrapper = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  height: auto;
  margin-bottom: 100px;
`;
export const TextAboardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const ImageAboardWrapper = styled.div`
  width: 100%;
  /* height: 200px; */
`;
export const HeaderResize = styled.div`
  font-weight: 900;
  font-size: 50px;
  margin-bottom: 20px;
  margin-top: 10%;


  
 /* @media screen and (max-width: 1115px){
    margin-top: 40%;
 } */
 @media screen and (max-width: 989px){
     /* margin-top: 30%; */
     font-size: 40px;
 }
 @media screen and (max-width: 671px){
    /* margin-top: 20%; */
     font-size: 30px;
 }
 @media screen and (max-width: 487px){
    /* margin-top: -80px; */
    font-size: 15px;
    margin-bottom: 0;
 }
`;

export const AboardBtnWrapper = styled.div`
   @media screen and (max-width: 671px){
    margin: 0 10px;
 }
`;

export const Header = styled.div`
  font-weight: 900;
  font-size: 50px;
  margin-bottom: 20px;


 @media screen and (max-width: 989px){
     font-size: 40px;
 }
 @media screen and (max-width: 671px){
     font-size: 30px;
 }
 @media screen and (max-width: 487px){
    font-size: 15px;
    margin-bottom: 0;
 }
`;