import React from 'react';
import { Typography, Stack } from '@mui/material';

type PostCategory = {
  node: {
    name?: string;
    uri?: string;
  };
};

type PostCategoryListProps = {
  categories: PostCategory[];
};

/**
 * Renders a list of categories assigned to a post.
 */
export function PostCategoryList({ categories }: PostCategoryListProps) {
  if (0 === categories.length) {
    return <></>;
  }

  const categoryList = categories.map((category) => (
    <Typography variant="body1" gutterBottom>
      {category.node.name},
    </Typography>
  ));

  return (
    <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
      <strong>{categories.length > 1 ? 'Categories' : 'Category'}:</strong>
      {categoryList}
    </Stack>
  );
}
