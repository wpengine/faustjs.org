import type { NextApiRequest, NextApiResponse } from 'next';

const CREATE_POST_URL =
  'https://faustjsorg.wpengine.com/wp-json/wp/v2/contact-submission';

function getAuthorizationToken() {
  if (!process.env.CONTACT_FORM_APP_PASS) {
    throw new Error('CONTACT_FORM_APP_PASS env var must be specified');
  }

  return `Basic ${btoa(process.env.CONTACT_FORM_APP_PASS)}`;
}

type ResponseData =
  | {
      message: string;
    }
  | { error: string; params?: any };

type RequestBody = {
  satisfaction: 'disapprove' | 'neutral' | 'approve';
  captchaToken: string;
  message?: string;
};

type ContactSubmissionRequest = Omit<NextApiRequest, 'body'> & {
  body: Partial<RequestBody>;
};

export default async function handler(
  req: ContactSubmissionRequest,
  res: NextApiResponse<ResponseData>,
) {
  if (req.method !== 'POST') {
    return res.status(405);
  }

  try {
    // Validate captcha
    const captchaUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${req.body.captchaToken}`;
    const captchaRes = await fetch(captchaUrl, {
      method: 'POST',
    });

    const captchaResBody = await captchaRes.json();

    if (!captchaResBody.success) {
      return res.status(400).json({
        error: 'ReCaptcha failed. Please try again',
      });
    }

    const createPostRes = await fetch(CREATE_POST_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: getAuthorizationToken(),
      },
      body: JSON.stringify({
        status: 'publish',
        acf: {
          satisfaction: req.body.satisfaction ?? undefined,
          message: req.body.message ?? undefined,
          url: req.headers.referer ?? undefined,
        },
      }),
    });

    if (!createPostRes.ok) {
      const notOkBody = await createPostRes.json();

      // Form validation issue
      if (createPostRes.status === 400) {
        return res.status(400).json({
          error: 'There were form validation issues',
          params: notOkBody?.data?.params,
        });
      }

      console.error('Invalid response from WordPress', notOkBody);

      // If its not a validation error, throw an internal server error
      throw new Error(
        'Invalid response from the WordPress create post endpoint',
      );
    }

    return res.status(200).json({
      message: 'Thanks for reaching out!',
    });
  } catch (err) {
    console.error('There was an error', err);

    return res.status(500).json({
      error: 'Internal server error',
    });
  }
}
