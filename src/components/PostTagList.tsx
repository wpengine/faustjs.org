import React from 'react';
import { Chip, Stack } from '@mui/material';

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
  if (tags.length === 0) {
    return null;
  }

  const tagChips = tags.map((tag) => <Chip label={tag.node.name} />);

  return (
    <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
      <strong>Tags:</strong>
      {tagChips}
    </Stack>
  );
}
