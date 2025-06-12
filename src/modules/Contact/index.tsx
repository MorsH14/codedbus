'use client';

import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Link,
} from '@mui/material';
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaTicketAlt,
} from 'react-icons/fa';
import { IconType } from 'react-icons';

interface ContactItem {
  icon: IconType;
  title: string;
  description: string;
  action: string;
  href: string;
  iconColor?: string;
}

const contactItems: ContactItem[] = [
  {
    icon: FaTicketAlt,
    title: 'Create Support Ticket',
    description: 'Send us a support ticket and get a response within 24 hours',
    action: 'Submit a ticket',
    href: '#',
    iconColor: '#2E2A7B',
  },
  {
    icon: FaWhatsapp,
    title: 'Chat with us on WhatsApp',
    description: 'Start a chat session with us',
    action: 'Start Chat',
    href: '#',
    iconColor: '#25D366',
  },
  {
    icon: FaEnvelope,
    title: 'Send us a mail',
    description: 'Email us and receive a response within 24 hours',
    action: 'Send Mail',
    href: '#',
    iconColor: '#EA4335',
  },
  {
    icon: FaPhoneAlt,
    title: 'Call Us',
    description: '+2348168485337',
    action: 'Give us a call',
    href: 'tel:+2348168485337',
    iconColor: '#2E2A7B',
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Locate Our Address',
    description: 'No. 27 Abolakale Street, Opp. IAC, Ilorin, Kwara State, Nigeria.',
    action: 'Locate us',
    href: '#',
    iconColor: '#2E2A7B',
  },
];

const Contact = () => {
  return (
    <Box sx={{ p: "100px" }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '100px',
          justifyContent: 'center',
        }}
      >
        {contactItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Box
              key={index}
              sx={{
                flex: '1 1 250px',
                Width: '300px',
                minWidth: '250px',
              }}
            >
              <Card
                sx={{
                  border: '1.5px solid #2E2A7B',
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  p: 2,
                  '&:hover': {
                    boxShadow: 5,
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ mb: 2 }}>
                    <Icon size={50} color={item.iconColor || '#2E2A7B'} />
                  </Box>
                  <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" mb={2}>
                    {item.description}
                  </Typography>
                  <Link
                    href={item.href}
                    underline="none"
                    sx={{ color: '#2E2A7B', fontWeight: 600, fontSize: 14 }}
                  >
                    {item.action}
                  </Link>
                </CardContent>
              </Card>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Contact;
