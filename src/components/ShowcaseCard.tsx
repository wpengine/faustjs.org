import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Link,
  Grid,
} from '@mui/material';
import Image from 'next/image';
import styles from 'styles/components/ShowcaseComponent.module.scss';

type ShowcaseCardProps = {
  imageSrc: string;
  title: string;
  url: string;
  alt: string;
};

export function ShowcaseCard({ imageSrc, title, alt, url }: ShowcaseCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={imageSrc} alt={alt} />
        <CardContent>
          <Grid id="top-row" container spacing={12}>
            <Grid item xs={2}>
              <Typography gutterBottom component="div">
                <Link href={url} underline="hover" color="inherit">
                  {title}
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Image
                // eslint-disable-next-line global-require, import/no-absolute-path
                src={require('/public/images/dashicon-showcase-link.png')}
                alt="dashicon-showcase-link"
                width={15}
                height={15}
              />
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
