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
import styles from 'styles/components/ShowcaseComponent.module.scss';
import LaunchIcon from '@mui/icons-material/Launch';

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
        <Link href={url}>
          <CardMedia
            component="img"
            className={styles.container}
            image={imageSrc}
            alt={alt}
          />
        </Link>
        <CardContent className={styles.fade}>
          <Grid
            id="top-row"
            container
            spacing={12}
            className={styles.container}>
            <Grid>
              <Typography className={styles.title} gutterBottom component="div">
                <Link href={url} className={styles.position}>
                  {title} <LaunchIcon className={styles.link} />
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
