import { WordPressTemplate } from '@faustwp/core';

export type WordPressTemplateProps = Parameters<typeof WordPressTemplate>[0];
export type HeaderItem = {
  id: string; // anchor link
  tagName: string; // h[1-6]
  title: string; // name of heading
};

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    mdl: true; // adds the `mdl` breakpoint
  }
}
