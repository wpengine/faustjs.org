import { Container as MUIContainer } from '@mui/material';
import React, { PropsWithChildren } from 'react';

export type ContainerProps = {
  muiProps?: Record<string, unknown>;
};

export function Container({
  children,
  muiProps,
}: PropsWithChildren<ContainerProps>) {
  return (
    <MUIContainer
      maxWidth="lg"
      sx={{
        mt: 4,
        py: 2,
        px: 2,
      }}
      {...muiProps}>
      {children}
    </MUIContainer>
  );
}
