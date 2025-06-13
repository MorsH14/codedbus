'use client';

import React from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { Global, css } from "@emotion/react"; // import Global styles

const FormWrapper = styled.div`
  max-width: 90%;
  margin: 40px auto;
  padding: 40px;
  border: 1px solid #2e2676;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: #2e2676;
  font-weight: 800;
  margin-bottom: 30px;
  text-align: center;
  margin-top: 50px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #2e2676;
  background: #ddd;
  font-size: 16px;
  color: black;
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #2e2676;
  background: #ddd;
  font-size: 16px;
  color: black;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  height: 150px;
  margin-bottom: 10px;
  border: 1px solid #2e2676;
  background: #ddd;
  font-size: 16px;
  resize: vertical;
  color: black;
`;

const Note = styled.p`
  font-size: 12px;
  color: #555;
  margin-bottom: 20px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 14px;
  font-size: 18px;
  background-color: #2e2676;
  color: white;
  border: none;
  cursor: pointer;
`;

export default function SubmitRequestForm() {
  return (
    <>
      <Global
        styles={css`
          option {
            color: black;
          }
        `}
      />

      <Title>Submit a request</Title>

      <FormWrapper>
        <Box width={"500px"}>
          <Select>
            <option>Choose a product*</option>
            <option>Exam Desk</option>
          </Select>

          <Select>
            <option>Choose issue type*</option>
            <option> Technical Support</option>
            <option>Customer Service</option>
          </Select>

          <Input type="email" placeholder="Your email address*" />
          <Input type="text" placeholder="Subject*" />

          <TextArea placeholder="Description*" />

          <Note>
            Please, do your best to describe the issue you are facing. <br />
            Please, do NOT include any additional personal information or sensitive
            information such as your credit card details.
          </Note>

          <SubmitButton>Submit</SubmitButton>
        </Box>
      </FormWrapper>
    </>
  );
}
