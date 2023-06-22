import React from 'react';
import Link from 'next/link';
import { gql } from '__generated__';
import { Grid } from '@mui/material';

type Post = {
  id: any;
  date: any;
  uri: any;
  title: string;
  author: any;
};

export function Posts(props: any) {
  const { posts } = props;
  return (
    <Grid container>
      <Grid item>
        {posts.map((post: Post, i: number) => {
          return <p>{i}</p>;
        })}
        {posts && posts?.length < 1 && <p>No posts found.</p>}
      </Grid>
    </Grid>
  );
}

Posts.fragments = {
  entry: gql(`
    fragment PostsItemFragment on Post {
      id
      date
      uri
      title
      content
      author {
        node {
          name
        }
      }
    }
  `),
};
