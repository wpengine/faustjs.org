import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import TextareaAutosize from '@mui/base/TextareaAutosize';
import { FeedbackTwoTone } from '@mui/icons-material';
import { Alert, Box, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';

import ReCAPTCHA from 'react-google-recaptcha';

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

export function ContactForm() {
  const [open, setOpen] = useState(false);
  const [satisfaction, setSatisfaction] = useState(null);
  const [message, setMessage] = useState('');
  const [hasFormErrors, setHasFormErrors] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState('');

  // Create a ref for the reCAPTCHA widget
  const recaptcha: RefObject<ReCAPTCHA> = useRef(null);

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

  const onCaptchaChange = (token: string | null) => {
    if (token) {
      setCaptchaToken(token);
    }
  };

  const onSubmit = async (e: FormEvent) => {
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
        satisfaction: satisfaction ?? undefined,
        message: message ?? undefined,
        captchaToken: captchaToken ?? undefined,
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

    setIsLoading(false);
    setCaptchaToken('');
    recaptcha.current.reset();
  };

  return <ContactForm />;
}

export default function ContactFormWrapper(props: PropsWithChildren) {
  const { children } = props;

  return (
    <>
      {children}

      <div>
        <ContactForm />
      </div>
    </>
  );
}
