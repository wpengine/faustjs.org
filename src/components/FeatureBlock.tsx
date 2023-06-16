import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';

export function FeatureBlock({
  title,
  codeSnippetTitle,
  codeSnippet,
  isImage,
  codeResultTitle,
  codeResult,
  altBlockColor,
}: {
  title: string;
  codeSnippetTitle: string;
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
        }}>
        {/* Code Snippet */}
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
          <Typography>{codeSnippetTitle}</Typography>
          <Typography variant="body2">{codeSnippet}</Typography>
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
          <Typography>{codeResultTitle}</Typography>
          {isImage ? (
            <Image
              // eslint-disable-next-line import/no-dynamic-require, global-require
              src={codeResult}
              alt=""
              style={{ width: '100%' }}
            />
          ) : (
            <Typography variant="body2">{codeResult}</Typography>
          )}
        </Box>
      </Grid>
    </Grid>
  );
}
