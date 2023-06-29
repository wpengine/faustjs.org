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
          codeSnippetTitle="Faust Toolbar"
          codeSnippet="A familiar publisher experience, providing a cohesive experience with wp-admin.\n\nEasily extensible with built in filters, empowering developers to customize for different use cases."
          isImage
          // eslint-disable-next-line global-require, import/no-absolute-path
          codeResult="/images/ToolbarImage.png"
          altSide={false}
          altBlockColor=""
        />

        <FeatureBlock
          codeSnippetTitle="Gutenberg Block Editor"
          codeSnippet="Regain a drag-and-drop WYSIWYG editing experience in a headless WordPress environment.\n\nFaust's blocks package provides the tools needed to match or extend the UI for Gutenberg’s block editing experience in headless."
          isImage
          // eslint-disable-next-line global-require, import/no-absolute-path
          codeResult="/images/GutenbergBlocks.png"
          altSide={false}
          altBlockColor=""
        />

        <FeatureBlock
          codeSnippetTitle="Plugin System"
          codeSnippet="Harness a plugin ecosystem that allows folks to build flexibly to meet their goals."
          isImage
          codeResult="/images/PluginSystemCache.png"
          altSide={false}
          altBlockColor=""
        />
      </Grid>
    </Grid>
  );
}
