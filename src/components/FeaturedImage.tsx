import React, { PropsWithChildren } from 'react';
import { Box } from '@mui/material';
import { gql } from '@apollo/client';
import Image from 'next/image';

type FeaturedImageProps = {
  image: any;
};

/**
 * A page/post Featured Image component
 * @param {Props} props The props object.
 * @param {string} props.title The post/page title.
 * @param {MediaItem} props.image The post/page image.
 * @param {string|number} props.width The image width.
 * @param {string|number} props.height The image height.
 * @return {React.ReactElement} The FeaturedImage component.
 */
export function FeaturedImage({
  image,
  children,
}: PropsWithChildren<FeaturedImageProps>): React.ReactElement {
  let src;
  if (image?.sourceUrl instanceof Function) {
    src = image?.sourceUrl();
  } else {
    src = image?.sourceUrl;
  }

  return src ? (
    <Box
      sx={{
        backgroundColor: 'var(--wp--preset--color--base)',
        backgroundImage: `url(${src})`,
        width: '100vw',
        maxWidth: '100%',
        minHeight: '75vh',
        '> img': {
          display: 'block',
          height: 'auto',
          maxWidth: '100%',
        },
      }}>
      {children}
    </Box>
  ) : null;
}

FeaturedImage.fragments = {
  entry: gql`
    fragment FeaturedImageFragment on NodeWithFeaturedImage {
      featuredImage {
        node {
          id
          sourceUrl
          altText
          mediaDetails {
            width
            height
          }
        }
      }
    }
  `,
};
