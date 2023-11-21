import { gql } from '__generated__';
import { FaustPage, getNextStaticProps } from '@faustwp/core';
// import { GetContactFormQuery } from '__generated__/graphql';
import {
  Button,
  Grid,
  TextField,
  Typography,
  Container,
  Box,
  Card,
  Alert,
  CircularProgress,
  makeStyles,
  Stack,
} from '@mui/material';
import { Head, Header, Footer, Main } from 'components';
import { GetStaticPropsContext } from 'next';

import React, {
  FormEvent,
  PropsWithChildren,
  RefObject,
  useRef,
  useState,
} from 'react';

import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

import TextareaAutosize from '@mui/base/TextareaAutosize';
import { FeedbackTwoTone } from '@mui/icons-material';
import { styled } from '@mui/system';

// TODO: Where is GetContactPageQuery imported from?
const Page: FaustPage<GetContactPageQuery> = (props) => {
  const { data } = props;

  const {
    generalSettings,
    primaryMenuItems,
    secondaryMenuItems,
    footer1MenuItems,
    footer2MenuItems,
    footer3MenuItems,
    footer4MenuItems,
    showcases, // change this
  } = data ?? {};
  const { title: siteTitle, description: siteDescription } = generalSettings;

  // export default function ContactPage() {
  // Here are the initial values for the form submission
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: { target: { name: any; value: string } }) => {
    // Upon entering the data, the state is set to that object with name, email, and message
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // eslint-disable-next-line no-console
  console.log('BEFORE HANDLESUBMIT!');

  // TODO: get rid of 'any'
  const handleSubmit = (e: { preventDefault: () => any }) => {
    e.preventDefault();
    // Here is where the connection should be made to the API (similar to src/pages/api/feedback.ts)
    // eslint-disable-next-line no-console
    console.log('Form submitted:', formData);
    // Reset the form after submission (?)
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <>
      <Head title={siteTitle} description={siteDescription} />

      <Header
        siteTitle={siteTitle}
        primaryMenuItems={primaryMenuItems.nodes}
        secondaryMenuItems={secondaryMenuItems.nodes}
      />

      <Main>
        <Container>
          <Typography variant="h2" align="center" gutterBottom>
            Contact Us
          </Typography>
          <Typography align="center" gutterBottom>
            Have a question for our team or general feedback on our site? Please
            reach out to us below!
          </Typography>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                label="Name"
                variant="filled"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <TextField
                label="Email"
                variant="filled"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <TextField
                label="Message"
                multiline
                rows={4}
                variant="filled"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </Stack>
            <div>
              By pressing submit, I have read Faust.js'{' '}
              <a
                target="_blank"
                href="https://faustjs.org/privacy-policy"
                rel="noreferrer">
                privacy policy
              </a>{' '}
              and agree to be contacted by a member of the Faust team regarding
              my feedback.
            </div>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </form>
        </Container>
      </Main>

      <Footer
        footer1MenuItems={footer1MenuItems}
        footer2MenuItems={footer2MenuItems}
        footer3MenuItems={footer3MenuItems}
        footer4MenuItems={footer4MenuItems}
      />
    </>
  );
};

// TODO: get rid of extra queries copied from showcase page
// TODO: simplify queries to only call header and footer menu items
Page.query = gql(`
  query GetShowcasesPage {
    showcases(first: 100) {
      nodes {
        id
        title
        showcaseFields {
          externalUrlTitle
          externalUrl
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
    generalSettings {
      title
      description
    }
    primaryMenuItems: menuItems(where: { location: PRIMARY }) {
      nodes {
        ...PrimaryMenuItemsFragment
      }
    }
    secondaryMenuItems: menuItems(where: { location: SECONDARY }) {
      nodes {
        ...SecondaryMenuItemsFragment
      }
    }
    footer1MenuItems: menuItems(where: {location: FOOTER_1}) {
      nodes {
        ...FooterMenuItemsFragment
      }
    }
    footer2MenuItems: menuItems(where: {location: FOOTER_2}) {
      nodes {
        ...FooterMenuItemsFragment
      }
    }
    footer3MenuItems: menuItems(where: {location: FOOTER_3}) {
      nodes {
        ...FooterMenuItemsFragment
      }
    }
    footer4MenuItems: menuItems(where: {location: FOOTER_4}) {
      nodes {
        ...FooterMenuItemsFragment
      }
    }
  }
`);

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page,
  });
}

export default Page;
