import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';

export function FeatureBlock({
  codeSnippetTitle,
  codeSnippet,
  isImage,
  codeResult,
  altSide,
  altBlockColor,
}: {
  codeSnippetTitle: string;
  codeSnippet: string;
  isImage: boolean;
  codeResult: string;
  altSide: boolean;
  altBlockColor: string;
}) {
  return (
    <Grid
      item
      xs={12}
      sx={{
        p: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        '@media screen and (max-width: 700px)': {
          flexDirection: 'column',
          justifyContent: 'center',
        },
      }}>
      {/* Code Snippet */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          order: 1,
          width: '50%',
          borderRadius: '4px',
          my: 1,
          mr: 2,
          p: 5,
          bgcolor: 'var(--wp--preset--color--contrast)',
          color: 'white',
          '@media screen and (max-width: 700px)': { order: 2, width: '100%' },
        }}>
        <Typography sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
          {codeSnippetTitle}
        </Typography>
        <br />
        <Typography variant="body1" style={{ whiteSpace: 'pre-line' }}>
          {codeSnippet.replace(/\\n/g, '\n')}
        </Typography>
      </Box>
      {/* Code Result */}
      <Box
        sx={{
          display: 'flex',
          width: '50%',
          order: 2,
          alignItems: 'center',
          borderRadius: '4px',
          my: 1,
          ml: 2,
          p: 2,
          '@media screen and (max-width: 700px)': {
            order: 1,
            width: '100%',
            ml: 0,
          },
        }}>
        {isImage ? (
          <Image
            src={codeResult}
            alt=""
            style={{ display: 'flex', height: '100%', width: '100%' }}
          />
        ) : (
          <Typography variant="body1">{codeResult}</Typography>
        )}
      </Box>
    </Grid>
  );
}
