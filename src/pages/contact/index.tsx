import { gql } from '__generated__';
import { FaustPage, getNextStaticProps } from '@faustwp/core';
import { GetContactFormPageQuery } from '__generated__/graphql';
import {
  Button,
  TextField,
  Typography,
  Container,
  Box,
  Alert,
  CircularProgress,
  Stack,
} from '@mui/material';
import { Head, Header, Footer, Main, EntryHeader } from 'components';
import { GetStaticPropsContext } from 'next';
import ReCAPTCHA from 'react-google-recaptcha';
import React, { RefObject, useRef, useState } from 'react';

const Page: FaustPage<GetContactFormPageQuery> = (props) => {
  const { data } = props;

  const {
    generalSettings,
    primaryMenuItems,
    secondaryMenuItems,
    footer1MenuItems,
    footer2MenuItems,
    footer3MenuItems,
    footer4MenuItems,
  } = data ?? {};
  const { title: siteTitle, description: siteDescription } = generalSettings;

  // Initial values for the form submission
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: { target: { name: any; value: string } }) => {
    // Upon entering data into form, the state is set to that object with name, email, and message
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [captchaToken, setCaptchaToken] = useState('');
  const [hasFormErrors, setHasFormErrors] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Ref for the reCAPTCHA widget
  const recaptcha: RefObject<ReCAPTCHA> = useRef(null);

  const onCaptchaChange = (token: string | null) => {
    if (token) {
      setCaptchaToken(token);
    }
  };

  const handleSubmit = async (e: { preventDefault: () => any }) => {
    e.preventDefault();

    setHasFormErrors(false);
    setShowThankYou(false);
    setIsLoading(true);

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData?.name,
        message: formData?.message,
        email: formData?.email,
        captchaToken,
      }),
    });

    if (!res.ok) {
      setHasFormErrors(true);
    } else {
      setShowThankYou(true);

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }

    setIsLoading(false);
    setCaptchaToken('');
    recaptcha.current.reset();
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
        <Container sx={{ p: 4 }}>
          <EntryHeader title="Contact Us" />
          <Typography align="center" gutterBottom>
            Have a question for our team or general feedback on our site? Please
            reach out to us below!
          </Typography>
          <form onSubmit={handleSubmit}>
            <Stack sx={{ p: 4 }} spacing={2}>
              {hasFormErrors && (
                <Alert severity="error">
                  There were form validation errors! Please check your response
                  and try again.
                </Alert>
              )}
              {showThankYou && (
                <Alert severity="success">
                  Your feedback has been submitted. Thank you!
                </Alert>
              )}
              <TextField
                label="Name"
                variant="filled"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                sx={{
                  '& .MuiInputLabel-shrink': {
                    color: 'black',
                  },
                }}
                required
              />
              <TextField
                label="Email"
                variant="filled"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                sx={{
                  '& .MuiInputLabel-shrink': {
                    color: 'black',
                  },
                }}
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
                sx={{
                  '& .MuiInputLabel-shrink': {
                    color: 'black',
                  },
                }}
                required
              />
              <ReCAPTCHA
                size="normal"
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={onCaptchaChange}
                ref={recaptcha}
              />
              <div>
                By pressing submit, I have read Faust.js&apos;{' '}
                <a
                  target="_blank"
                  href="https://faustjs.org/privacy-policy"
                  rel="noreferrer">
                  privacy policy
                </a>{' '}
                and agree to be contacted by a member of the Faust team
                regarding my feedback.
              </div>

              <Button
                sx={{ width: 5 }}
                variant="contained"
                color="primary"
                type="submit"
                disabled={isLoading}>
                {isLoading && (
                  <Box>
                    <CircularProgress size={20} />
                  </Box>
                )}
                Submit
              </Button>
            </Stack>
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

Page.query = gql(`
  query GetContactFormPage {
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
