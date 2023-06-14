import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import Image from 'next/image';

export function Content() {
  return (
    <Grid>
      {/* Hero Banner */}
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ textAlign: 'center' }}>
          <Image
            src="public/icons/placeholder.svg"
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
          <Typography variant="body1" sx={{ textAlign: 'center' }}>
            A JavaScript framework that makes building headless WordPress simple
            and easy.
          </Typography>
        </Grid>

        <Grid item xs={12} sx={{ textAlign: 'center' }}>
          {/* Any special effects, such as onHover? */}
          <Button
            href="/tutorial/get-started-with-faust"
            variant="contained"
            sx={{
              backgroundColor: 'var(--faust--footer-background-color)',
              color: 'white',
            }}>
            Get Started
          </Button>
        </Grid>
      </Grid>

      {/* Code Snippet + Code Result Grid Large Container */}
      <Grid container spacing={2}>
        {/* Feature Block */}
        <Grid container spacing={2} sx={{ m: 5 }}>
          {/* Title */}
          <Grid item xs={12}>
            <Typography variant="body1" sx={{ textAlign: 'left' }}>
              Faust Toolbar
            </Typography>
          </Grid>
          {/* Code Snippet */}
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Box
              sx={{
                width: '50%',
                height: 'auto',
                my: 1,
                mr: 2,
                p: 2,
                pb: 2.5,
                bgcolor: 'var(--faust--footer-background-color)',
                color: 'white',
              }}>
              <Typography>Code Snippet</Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci voluptatum, temporibus dicta non illo iure! Expedita
                dolor nesciunt iure iste quibusdam deleniti, consectetur
                commodi, sit corrupti debitis, quaerat dolorem officia.
              </Typography>
            </Box>
            {/* Code Result */}
            <Box
              sx={{
                width: '50%',
                height: 'auto',
                my: 1,
                ml: 2,
                p: 2,
                pb: 2.5,
                border: '1px solid',
                borderColor: 'var(--faust--footer-background-color)',
              }}>
              <Typography>Code Result</Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci voluptatum, temporibus dicta non illo iure! Expedita
                dolor nesciunt iure iste quibusdam deleniti, consectetur
                corrupti debitis, quaerat dolorem officia.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
