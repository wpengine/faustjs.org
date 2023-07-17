import React from 'react';
import { Box, LinkProps, Link as MuiLink } from '@mui/material';
import NextLink from 'next/link';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function isExternalURL(urlInput: string | URL) {
  try {
    const url = new URL(urlInput);
    if (url.origin !== 'https://faustjs.org') {
      return true;
    }
    return false;
  } catch (_) {
    return false;
  }
}

export function Link(props: LinkProps<'a'>) {
  const { children } = props;
  const { href } = props;
  const { className } = props;

  return (
    <MuiLink component={NextLink} {...props}>
      {className !== 'TopHeaderAppBar_social-navigation-link__KFeb1' ? (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {children}
          {isExternalURL(href) && (
            <OpenInNewIcon
              sx={{
                fontSize: '1rem',
                color: 'inherit',
                marginLeft: '0.2rem',
              }}
            />
          )}
        </Box>
      ) : (
        children
      )}
    </MuiLink>
  );
}
