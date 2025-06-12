'use client';

import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import LinkButton from '@/components/Button/Button';

const SupportPage = () => {
  const items = Array(6).fill('Exam Desk');

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
        Support Page
      </Typography>
      <Typography mb={'50px'} variant="subtitle1" align="center" gutterBottom>
        Select a product you need assistance with to get started.
      </Typography>

      {/* Replacing Grid with Flexbox */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 4,
          justifyContent: 'center',
          mt: 2,
        }}
      >
        {items.map((label, index) => (
          <Box
            key={index}
            sx={{
              width: '100%',
              maxWidth: 345,
              flex: '1 1 250px',
            }}
          >
            <Card
              sx={{
                border: '2px solid #2E2A7B',
                textAlign: 'center',
                p: 2,
                '&:hover': {
                  boxShadow: 6,
                },
              }}
            >
              <CardContent>
                <Box
                  component="img"
                  src="/assets/table.jpg"
                  alt="Exam Desk"
                  sx={{ width: 300, height: 80, objectFit: 'contain', mb: 2 }}
                />
                <Typography variant="h6" fontWeight="bold">
                  {label}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>

      {/* Contact Section */}
      <Box
        sx={{
          width: '100%',
          background: '#2e2373',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: '80px 40px',
          marginTop: '100px',
        }}
      >
        <h1 style={{ color: 'white', marginBottom: '40px' }}>
          Have a message for us?
        </h1>
        <LinkButton label="Contact Us" href="/contact" bgColor="white" textColor="#3b2d93" />
      </Box>
    </Box>
  );
};

export default SupportPage;
