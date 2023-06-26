import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';

export function FeatureBlock({
  title,
  //   codeSnippetTitle,
  codeSnippet,
  isImage,
  codeResultTitle,
  codeResult,
  altBlockColor,
}: {
  title: string;
  //   codeSnippetTitle: string;
  codeSnippet: string;
  isImage: boolean;
  codeResultTitle: string;
  codeResult: string;
  altBlockColor: string;
}) {
  return (
    <Grid
      container
      spacing={1}
      sx={{ m: 0, p: 2, backgroundColor: altBlockColor }}>
      {/* Title */}
      <Grid
        item
        xs={12}
        sx={{
          p: 1,
          display: 'flex',
          flexDirection: 'row',
          pb: 0,
        }}>
        <Typography
          variant="body1"
          sx={{ textAlign: 'left', fontWeight: 'bold' }}>
          {title}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          p: 1,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          '@media screen and (max-width: 600px)': {
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
            width: '50%',
            height: 'auto',
            borderRadius: '4px',
            my: 1,
            mr: 2,
            p: 5,
            // pb: 2.5,
            bgcolor: 'var(--wp--preset--color--contrast)',
            color: 'white',
            '@media screen and (max-width: 600px)': { width: '100%' },
          }}>
          {/* <Typography>{codeSnippetTitle}</Typography> */}
          <Typography variant="body1" style={{ whiteSpace: 'pre-line' }}>
            {codeSnippet.replace(/\\n/g, '\n')}
          </Typography>
        </Box>
        {/* Code Result */}
        <Box
          sx={{
            width: '50%',
            height: 'auto',
            borderRadius: '4px',
            my: 1,
            ml: 2,
            p: 2,
            border: '1px solid',
            borderColor: 'var(--wp--preset--color--contrast)',
            '@media screen and (max-width: 600px)': { width: '100%', ml: 0 },
          }}>
          <Typography sx={{ pb: 1 }}>{codeResultTitle}</Typography>
          {isImage ? (
            <Image src={codeResult} alt="" style={{ width: '100%' }} />
          ) : (
            <Typography variant="body1">{codeResult}</Typography>
          )}
        </Box>
      </Grid>
    </Grid>
  );
}
