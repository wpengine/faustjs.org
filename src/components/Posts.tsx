import React from 'react';
import { gql } from '__generated__';
import { Grid, Box, Typography, Button, ListItem, Chip } from '@mui/material';
import Link from 'next/link';
import { getMdyFormattedDate } from 'utility/utilities';

type Post = {
  id: string;
  date: string;
  uri: string;
  title: string;
  excerpt: string;
  author: any;
  tags: any;
};

type PostsProps = {
  posts: Post[];
};

export function Posts(props: PostsProps) {
  const { posts } = props;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        {posts &&
          posts?.length > 0 &&
          posts.map((post: Post, i: number) => {
            return (
              <>
                <hr style={{ opacity: 0.25 }} />

                <Box
                  key={post.id}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    my: 6,
                  }}>
                  <Typography
                    variant="body1"
                    component="h6"
                    sx={{
                      mb: 2,
                      color: 'rgb(107 114 128)',
                      textAlign: 'center',
                    }}>
                    {getMdyFormattedDate(post.date)}
                  </Typography>
                  <Typography
                    variant="h4"
                    component="h3"
                    sx={{
                      mb: 1,
                      fontWeight: 'bold',
                      color: '#663DEC',
                      textAlign: 'center',
                      '&:hover': {
                        color: '#663DEC',
                        textDecoration: 'underline',
                      },
                    }}>
                    <Link
                      href={post.uri}
                      aria-hidden="true"
                      style={{
                        color: '#7e5cef',
                        textDecoration: 'none',
                      }}>
                      {post.title}
                    </Link>
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    style={{ textAlign: 'center', color: 'rgb(107 114 128)' }}>
                    by{' '}
                    {`${post.author.node.firstName} ${post.author.node.lastName}`}
                  </Typography>

                  {post?.tags?.nodes?.length > 0 && (
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mt: 2,
                      }}>
                      <ListItem
                        disablePadding
                        disableGutters
                        sx={{ justifyContent: 'center', mb: 2 }}>
                        {post.tags.nodes.map((tag: any) => {
                          return (
                            <Chip
                              key={tag.id}
                              label={tag.name}
                              sx={{ mr: 1 }}
                            />
                          );
                        })}
                      </ListItem>
                    </Box>
                  )}

                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      mb: 2,
                    }}
                    dangerouslySetInnerHTML={{
                      __html: post.excerpt,
                    }}
                  />
                  <Button
                    href={post.uri}
                    variant="contained"
                    size="medium"
                    sx={{
                      alignSelf: 'center',
                      maxWidth: '150px',
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
      excerpt
      author {
        node {
          firstName
          lastName
        }
      }
      tags {
        nodes {
          id
          name
          link
        }
      }
    }
  `),
};
