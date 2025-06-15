'use client';

import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { Global, css } from '@emotion/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  &:disabled {
    background-color: #999;
    cursor: not-allowed;
  }
`;

export default function SubmitRequestForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    const data = {
      product: formData.get('product'),
      issue: formData.get('issue'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      description: formData.get('description'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success('Form submitted successfully!');
        formRef.current.reset();
      } else {
        const errorData = await res.json();
        toast.error(`Submission failed: ${errorData.error || 'Unknown error'}`);
      }
    } catch (err) {
      console.error(err);
      toast.error('An error occurred.');
    }

    setLoading(false);
  };

  return (
    <>
      <Global
        styles={css`
          option {
            color: black;
          }

          input,
          select,
          textarea {
            color: black !important;
            background-color: #ddd !important;
            -webkit-text-fill-color: black !important;
          }

          input:-webkit-autofill {
            -webkit-box-shadow: 0 0 0 30px #ddd inset !important;
            -webkit-text-fill-color: black !important;
          }
        `}
      />

      <Title>Submit a request</Title>

      <FormWrapper>
        <Box width={'500px'}>
          <form ref={formRef} onSubmit={handleSubmit}>
            <Select name="product" required>
              <option value="">Choose a product*</option>
              <option value="Exam Desk">Exam Desk</option>
            </Select>

            <Select name="issue" required>
              <option value="">Choose issue type*</option>
              <option value="Technical Support">Technical Support</option>
              <option value="Customer Service">Customer Service</option>
            </Select>

            <Input type="email" name="email" placeholder="Your email address*" required />
            <Input type="text" name="subject" placeholder="Subject*" required />
            <TextArea name="description" placeholder="Description*" required />

            <Note>
              Please, do your best to describe the issue you are facing. <br />
              Do NOT include sensitive info like your credit card details.
            </Note>

            <SubmitButton type="submit" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit'}
            </SubmitButton>
          </form>
        </Box>
      </FormWrapper>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
