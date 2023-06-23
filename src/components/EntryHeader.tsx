import React from 'react';
import className from 'classnames/bind';
import { Container } from '@mui/material';
import { FeaturedImage } from 'components';
import styles from 'styles/components/EntryHeader.module.scss';

const cx = className.bind(styles);

type EntryHeaderProps = {
  title: string;
  image?: any;
  date?: Date | string;
  author?: string;
};

export function EntryHeader({ title, image, date, author }: EntryHeaderProps) {
  return (
    <div className={cx(styles.entry)}>
      {title && <h2 className={cx(styles.title)}>{title}</h2>}

      {date && author && (
        <div className={cx(styles.meta)}>
          By {author} on <time>{new Date(date).toDateString()}</time>
        </div>
      )}

      {image && (
        <div className={cx('image')}>
          <Container>
            <FeaturedImage
              className={cx('featured-image')}
              image={image}
              priority
            />
          </Container>
        </div>
      )}
    </div>
  );
}
