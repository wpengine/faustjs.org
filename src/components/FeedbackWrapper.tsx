import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React, { FormEvent, PropsWithChildren, useState } from 'react';

import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import TextareaAutosize from '@mui/base/TextareaAutosize';
import { FeedbackTwoTone } from '@mui/icons-material';
import { Alert } from '@mui/material';
import { styled } from '@mui/system';

const blue = {
  100: '#DAECFF',
  200: '#b6daff',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

const StyledTextarea = styled(TextareaAutosize)(
  ({ theme }) => `
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  border-radius: 12px 12px 0 12px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${
    theme.palette.mode === 'dark' ? grey[900] : grey[50]
  };

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${
      theme.palette.mode === 'dark' ? blue[500] : blue[200]
    };
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);

export function FormDialog() {
  const [open, setOpen] = useState(false);
  const [satisfaction, setSatisfaction] = useState(null);
  const [message, setMessage] = useState('');
  const [hasFormErrors, setHasFormErrors] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setMessage('');
    setSatisfaction(null);
    setHasFormErrors(false);
    setShowThankYou(false);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setHasFormErrors(false);
    setShowThankYou(false);

    const res = await fetch('/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        satisfaction: satisfaction ?? undefined,
        message: message ?? undefined,
      }),
    });

    if (!res.ok) {
      setHasFormErrors(true);
    } else {
      setShowThankYou(true);

      // Reset form
      setMessage('');
      setSatisfaction(null);
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        style={{
          position: 'fixed',
          bottom: '1rem',
          right: '1rem',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <FeedbackTwoTone
          style={{ position: 'relative', top: 2, marginRight: '0.5rem' }}
        />{' '}
        Feedback
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={onSubmit}>
          <DialogTitle>Submit Feedback</DialogTitle>
          {hasFormErrors && (
            <Alert severity="error">
              There were form validation errors! Please check your response and
              try again.
            </Alert>
          )}
          {showThankYou && (
            <Alert severity="success">
              Your feedback has been submitted. Thank you!
            </Alert>
          )}
          <DialogContent>
            <DialogContentText style={{ paddingBottom: '1rem' }}>
              We value your feedback! Please let us know what we could do
              better, what you&apos;re happy about, or any ideas you may have!
            </DialogContentText>

            <FormControl required style={{ paddingBottom: '1rem' }}>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Was this page helpful?
              </FormLabel>
              <RadioGroup
                onChange={(e) => setSatisfaction(e.target.value)}
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group">
                <FormControlLabel
                  value="disapprove"
                  control={<Radio color="error" />}
                  label="🙁 Could be better"
                />
                <FormControlLabel
                  value="neutral"
                  control={<Radio color="default" />}
                  label="😐 Neutral"
                />
                <FormControlLabel
                  value="approve"
                  control={<Radio color="success" />}
                  label="😀 Happy"
                />
              </RadioGroup>
            </FormControl>

            <FormControl style={{ width: '100%' }}>
              <FormLabel>Comments</FormLabel>
              <StyledTextarea
                aria-label="Your feedback message"
                minRows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Share Feedback</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

export default function FeedbackWrapper(props: PropsWithChildren) {
  const { children } = props;

  return (
    <>
      {children}

      <div>
        <FormDialog />
      </div>
    </>
  );
}
