import React from 'react';
import { Chip, Stack } from '@mui/material';

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
  if (categories.length === 0) {
    return null;
  }

  const categoryChips = categories.map((category) => (
    <Chip key={category.node.name} label={category.node.name} />
  ));

  return (
    <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
      <strong>{categories.length > 1 ? 'Categories' : 'Category'}:</strong>
      {categoryChips}
    </Stack>
  );
}
