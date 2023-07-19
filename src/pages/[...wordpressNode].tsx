import React from 'react';
import { getWordPressProps, WordPressTemplate } from '@faustwp/core';
import { GetStaticPaths, GetStaticProps } from 'next';
import { WordPressTemplateProps } from 'types';

export default function Page(props: WordPressTemplateProps) {
  return <WordPressTemplate {...props} />;
}

export const getStaticProps: GetStaticProps = (ctx) => {
  return getWordPressProps({ ctx, revalidate: 60 });
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};
