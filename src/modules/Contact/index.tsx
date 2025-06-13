"use client";

import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaTicketAlt,
} from 'react-icons/fa';
import { IconType } from 'react-icons';
import Link from 'next/link';

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
    href: '/submit-request',
    iconColor: '#2E2A7B',
  },
  {
    icon: FaWhatsapp,
    title: 'Chat with us on WhatsApp',
    description: 'Start a chat session with us',
    action: 'Start Chat',
    href: 'https://wa.me/2348168485337',
    iconColor: '#25D366',
  },
  {
    icon: FaEnvelope,
    title: 'Send us a mail',
    description: 'Email us and receive a response within 24 hours',
    action: 'Send Mail',
    href: 'mailto:support@codedbus.com',
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
    href: 'https://maps.google.com?q=27+Abolakale+Street,+Ilorin+Nigeria',
    iconColor: '#2E2A7B',
  },
];

const isExternalLink = (url: string) =>
  url.startsWith('http') || url.startsWith('mailto:') || url.startsWith('tel:');

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
          const Wrapper = isExternalLink(item.href) ? 'a' : Link;
          const linkProps = isExternalLink(item.href)
            ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' }
            : { href: item.href };

          return (
            <Box
              key={index}
              sx={{
                flex: '1 1 250px',
                width: '300px',
                minWidth: '250px',
              }}
            >
              <Wrapper {...linkProps} style={{ textDecoration: 'none' }}>
                <Card
                  sx={{
                    border: '1.5px solid #2E2A7B',
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    cursor: 'pointer',
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
                    <Typography
                      sx={{ color: '#2E2A7B', fontWeight: 600, fontSize: 14 }}
                    >
                      {item.action}
                    </Typography>
                  </CardContent>
                </Card>
              </Wrapper>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Contact;
