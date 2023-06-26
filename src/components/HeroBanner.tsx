import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import Image from 'next/image';

export function HeroBanner() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <Image
          // eslint-disable-next-line global-require, import/no-absolute-path
          src={require('/public/images/faust-logo-256x256.png')}
          alt="Faust.js Logo"
          width={100}
          height={100}
        />
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h3" sx={{ textAlign: 'center' }}>
          Faust.js
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography
          variant="body1"
          sx={{ textAlign: 'center', fontSize: '1.3rem', p: '0.7rem 0' }}>
          A JavaScript framework that makes building headless WordPress simple
          and easy.
        </Typography>
      </Grid>

      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <Button
          href="/tutorial/get-started-with-faust"
          variant="contained"
          sx={{
            '&:hover': {
              backgroundColor: '#663DEC',
            },
            backgroundColor: '#7e5cef',
            color: 'white',
          }}>
          Get Started
        </Button>
      </Grid>
    </Grid>
  );
}

