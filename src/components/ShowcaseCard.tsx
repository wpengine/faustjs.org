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
    <Card sx={{ maxWidth: 345 }} className={styles.card}>
      <CardActionArea className={styles.image}>
        <CardMedia
          component="img"
          className={styles.container}
          image={imageSrc}
          alt={alt}
        />
        <CardContent className={styles.fade}>
          <Grid
            id="top-row"
            container
            spacing={12}
            className={styles.container}>
            <Grid item xs={2}>
              <Typography className={styles.title} gutterBottom component="div">
                <Link href={url} className={styles.position} underline="hover">
                  {title}
                </Link>
              </Typography>
            </Grid>
            <Grid className={styles.link} item xs={2}>
              <Image
                // eslint-disable-next-line global-require, import/no-absolute-path
                src={require('/public/images/dashicon-showcase-link.png')}
                alt="dashicon-showcase-link"
                className={styles.position}
                // width={15}
                // height={15}
              />
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
