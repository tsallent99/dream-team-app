import React from 'react';
import { Card, CardContent, Typography, CardMedia, Box, Divider } from '@mui/material';

interface TournamentCardProps {
  name: string;
  leagueName: string;
  logo: string;
  prizePool: number;
  startDate: string;
}

const TournamentCard: React.FC<TournamentCardProps> = ({
  name,
  leagueName,
  logo,
  prizePool,
  startDate,
}) => {
  const formattedDate = new Date(startDate).toLocaleDateString();

  return (
    <Card sx={{ 
      boxShadow: 6, 
      borderRadius: '16px', 
      maxWidth: 450, 
      padding: 3, 
      backgroundColor: '#f5f5f5',
      transition: 'transform 0.3s ease',
      '&:hover': {
        transform: 'scale(1.03)',
      },
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
        <CardMedia
          component="img"
          image={logo}
          alt={`${leagueName} logo`}
          sx={{ 
            width: 70, 
            height: 70, 
            borderRadius: '50%', 
            marginRight: 3,
            objectFit: 'contain',
            objectPosition: 'center',
          }}
        />
        <Typography component="div" variant="h5" sx={{ 
          fontWeight: 'bold', 
          
          color: '#333',
        }}>
          {name}
        </Typography>
      </Box>
      
      <Divider sx={{ borderColor: '#ddd', marginBottom: 2 }} />

      <CardContent sx={{ paddingTop: 2 }}>
        <Typography variant="h6" sx={{
            fontWeight: 'bold', 
          marginBottom: 1 
        }}>
          Prize Pool: ${prizePool.toLocaleString()}
        </Typography>
        <Typography variant="body2" sx={{ 
          color: '#999', 
         
        }}>
          Start Date: {formattedDate}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TournamentCard;





