import React, { PropsWithChildren } from 'react';
import { Box } from '@mui/material';
import * as SELECTORS from 'constants/selectors';

export function Main(props: PropsWithChildren<{}>) {
  const { children } = props;

  return (
    <Box
      id={SELECTORS.MAIN_CONTENT_ID}
      tabIndex={-1}
      sx={{
        pb: 4,
        backgroundColor: 'var(--wp--preset--color--base)',
      }}
      {...props}>
      {children}
    </Box>
  );
}
