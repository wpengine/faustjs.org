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

// import { TextField, Button, Container, Typography, Box, makeStyles } from '@mui/material';

// export default function ContactPage() {
//   const ContactForm = () => {
//     const [formData, setFormData] = useState({
//       name: '',
//       email: '',
//       message: '',
//     });

//     const handleInputChange = (e: { target: { name: any; value: string } }) => {
//       const { name, value } = e.target;
//       setFormData((prevData) => ({
//         ...prevData,
//         [name]: value,
//       }));
//     };
//   };

//   return (
//     <>
//       <div>fresh test</div>
//       <ul>
//         <li>is this working</li>
//       </ul>
//     </>
//   );
// }

export default function ContactPage() {
  const ContactForm = () => {
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
  };
  return (
    <>
      <div>From the div in the returnnnnn</div>
      <div>another thing!!!!</div>
    </>
  );
}

{/* <Container>
<Typography variant="h4" align="center" gutterBottom>
  Contact Us
</Typography>
{/* onSubmit={handleSubmit} in form below */}
<form onSubmit={handleSubmit}>
  <TextField
    label="Name"
    variant="outlined"
    name="name"
    value={formData.name}
    onChange={handleInputChange}
    required
  />
  <TextField
    label="Email"
    variant="outlined"
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
    variant="outlined"
    name="message"
    value={formData.message}
    onChange={handleInputChange}
    required
  />
  <Button variant="contained" color="primary" type="submit">
    Submit
  </Button>
</form>
</Container> */}