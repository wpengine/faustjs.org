import React from 'react';
import Link from 'next/link';
import { gql } from '__generated__';
import { Grid, Box, Typography, Button } from '@mui/material';

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
    <Grid container spacing={2}>
      <Grid item xs={12}>
        {posts.map((post: Post, i: number) => {
          const getFormattedDate = (date: string) => {
            const dateObj = new Date(date);
            const dateMDY = `${dateObj.toLocaleString('default', {
              month: 'long',
            })} ${dateObj.getMonth() + 1}, ${dateObj.getFullYear()}`;
            return dateMDY;
          };
          return (
            <>
              <hr />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                <Typography variant="body1" component="h6">
                  {getFormattedDate(post.date)}
                </Typography>
                <Typography variant="body1" component="h6">
                  {post.title}
                </Typography>
                <Button
                  href={post.uri}
                  target="_blank"
                  variant="contained"
                  sx={{
                    '&:hover': {
                      backgroundColor: '#663DEC',
                    },
                    backgroundColor: '#7e5cef',
                    color: 'white',
                  }}>
                  Read More
                </Button>
              </Box>
            </>
          );
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
