import React from 'react';
import { Chip, Typography, Stack } from '@mui/material';

type PostTag = {
  node: {
    name?: string;
    uri?: string;
  };
};

type PostTagListProps = {
  tags: PostTag[];
};

/**
 * Renders a list of tags assigned to a post.
 */
export function PostTagList({ tags }: PostTagListProps) {
  if (0 === tags.length) {
    return <></>;
  }

  const categoryChips = tags.map((tag) => <Chip label={tag.node.name} />);

  return (
    <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
      <strong>{tags.length > 1 ? 'Tags' : 'Tag'}:</strong>
      {categoryChips}
    </Stack>
  );
}
