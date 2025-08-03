'use client';

import React from 'react';
import { Box, Paper, Typography, Avatar } from '@mui/material';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Oluwafemi John, ADEYEMO CFE',
    role: 'Chief Technology Officer',
    image: '/assets/teamLead.jpg',
  },
  {
    name: 'Amidat, ALEGE',
    role: 'UI Designer',
    image: '/assets/medat.jpg',
  },
  {
    name: 'Olamide, Alade',
    role: 'Website Designer',
    image: '/assets/mm.png',
  },
];

const TeamSection: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#001A59', py: 8, px: 2 }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 4,
        }}
      >
        {teamMembers.map((member, index) => (
          <Box
            key={index}
            sx={{
              width: '100%',
              maxWidth: 350,
              flex: '1 1 250px',
            }}
          >
            <Paper
              elevation={0}
              sx={{
                height: '100%',
                minHeight: 370,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                backgroundColor: '#fff',
                py: 4,
                px: 2,
              }}
            >
              <Avatar
                src={member.image}
                alt={member.name}
                sx={{
                  width: 150,
                  height: 150,
                  mb: 2,
                }}
              />
              <Typography fontWeight="bold" gutterBottom>
                {member.name}
              </Typography>
              <Typography color="#001A59" fontWeight="bold">
                {member.role}
              </Typography>
            </Paper>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TeamSection;
