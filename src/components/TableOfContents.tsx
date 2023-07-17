import React from 'react';
import { Typography, List, ListItem } from '@mui/material';
import { Link } from './Link';

type HeaderItem = {
  id: string;
  tagName: string;
  title: string;
};

interface PropsTableOfContents {
  toc: HeaderItem[];
  prevTagArray: (string | number)[];
}

export function TableOfContents(props: PropsTableOfContents) {
  const { toc, prevTagArray } = props;

  if (!toc || !prevTagArray) {
    return null;
  }

  function calculateLevel(tag: string, operation: string) {
    const prevTagLevel = prevTagArray[1].toString();
    let newValue;

    if (operation === 'add') {
      newValue = parseInt(prevTagLevel, 10) + 1;
    } else if (operation === 'minus') {
      newValue = parseInt(prevTagLevel, 10) - 1;
      if (newValue < 0) {
        newValue = 0;
      }
    }
    const newLevel = `${newValue.toString()}rem`;
    prevTagArray[0] = tag;
    prevTagArray[1] = newValue;
    return newLevel;
  }

  function handleIrregularTags(tag: string) {
    if (prevTagArray[0] === '') {
      prevTagArray[0] = tag;
      return '0rem';
    }

    const prevTagName = prevTagArray[0].toString();
    const prevLevel = parseInt(prevTagName.substring(1), 10);
    const currLevel = parseInt(tag.substring(1), 10);

    if (prevLevel < currLevel) {
      return calculateLevel(tag, 'add');
    }
    if (prevLevel === currLevel) {
      return `${prevTagArray[1].toString()}rem`;
    }
    return calculateLevel(tag, 'minus');
  }

  return (
    <nav className="" style={{ paddingLeft: '1rem' }}>
      <Typography variant="body1" component="h3" sx={{ fontWeight: 'bold' }}>
        On this page
      </Typography>
      <List>
        {toc.map((item) => (
          <ListItem
            key={item.id}
            className={item.tagName === 'h3' ? 'ml-3' : ''}
            style={{ color: 'black', paddingLeft: 0 }}>
            <Link
              sx={{
                '&:hover': {
                  color: 'rgba(0, 0, 0, 1.0)',
                },
                textDecoration: 'none',
                listStyleType: 'none',
                color: 'rgba(0, 0, 0, 0.6)',
                display: 'flex',
                flex: '1',
                fontSize: '0.93rem',
                transition: '0.2s ease',
                px: handleIrregularTags(item.tagName),
              }}
              href={item.id}>
              {item.title}
            </Link>
          </ListItem>
        ))}
      </List>
    </nav>
  );
}
