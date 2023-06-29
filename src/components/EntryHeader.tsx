import React from 'react';
import className from 'classnames/bind';
import { Container } from '@mui/material';
import { FeaturedImage } from 'components';
import { getMdyFormattedDate } from 'utility/utilities';
import styles from 'styles/components/EntryHeader.module.scss';

const cx = className.bind(styles);

type EntryHeaderProps = {
  title: string;
  image?: any;
  date?: string;
  author?: string;
};

export function EntryHeader({ title, image, date, author }: EntryHeaderProps) {
  return (
    <div className={cx(styles.entry)}>
      {title && <h2 className={cx(styles.title)}>{title}</h2>}

      {date && author && (
        <div className={cx(styles.meta)}>
          By {author} on <time>{getMdyFormattedDate(date)}</time>
        </div>
      )}

      {image && <FeaturedImage image={image} />}
    </div>
  );
}
