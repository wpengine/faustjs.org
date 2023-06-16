import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { HeroBanner } from './HeroBanner';
import { FeatureBlock } from './FeatureBlock';

export function Content() {
  return (
    <Grid container sx={{ m: 0 }}>
      {/* Hero Banner */}
      <HeroBanner />
      {/* Code Snippet + Code Result Grid Container */}
      <Grid container spacing={2} sx={{ mt: 3 }}>
        <FeatureBlock
          title="Faust Toolbar"
          // codeSnippetTitle="Code Snippet"
          codeSnippet="A familiar publisher experience, providing a cohesive experience with wp-admin.\n\nEasily extensible with built in filters, empowering developers to customize for different use cases."
          isImage={false}
          codeResultTitle="Code Result"
          codeResult="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatum, temporibus dicta non illo iure! Expedita dolor nesciuntiure iste quibusdam deleniti, consectetur commodi, sit corrupti debitis, quaerat dolorem officia."
          altBlockColor=""
        />

        <FeatureBlock
          title="Gutenberg Block Editor"
          // codeSnippetTitle=""
          codeSnippet="Regain a drag-and-drop WYSIWYG editing experience in a headless WordPress environment.\n\nFaust's blocks package provides the tools needed to match or extend the UI for Gutenberg’s block editing experience in headless."
          isImage
          codeResultTitle="How It Works:"
          // eslint-disable-next-line global-require, import/no-absolute-path
          codeResult={require('/public/images/GutenbergBlockImage.png')}
          altBlockColor=""
        />

        <FeatureBlock
          title="Plugin System"
          // codeSnippetTitle="Code Snippet"
          codeSnippet="Harness a plugin ecosystem that allows folks to build flexibly to meet their goals."
          isImage={false}
          codeResultTitle="Code Result"
          codeResult="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatum, temporibus dicta non illo iure! Expedita dolor nesciuntiure iste quibusdam deleniti, consectetur commodi, sit corrupti debitis, quaerat dolorem officia."
          altBlockColor=""
        />

        <FeatureBlock
          title="WP Templates"
          // codeSnippetTitle="Code Snippet"
          codeSnippet="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatum, temporibus dicta non illo iure! Expedita dolor nesciuntiure iste quibusdam deleniti, consectetur commodi, sit corrupti debitis, quaerat dolorem officia."
          isImage={false}
          codeResultTitle="Code Result"
          codeResult="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatum, temporibus dicta non illo iure! Expedita dolor nesciuntiure iste quibusdam deleniti, consectetur commodi, sit corrupti debitis, quaerat dolorem officia."
          altBlockColor=""
        />
      </Grid>
    </Grid>
  );
}
