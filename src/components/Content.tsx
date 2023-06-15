import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { HeroBanner } from './HeroBanner';
import { FeatureBlock } from './FeatureBlock';

export function Content() {
  return (
    <Grid container>
      {/* Hero Banner */}
      <HeroBanner />
      {/* Code Snippet + Code Result Grid Container */}
      <Grid container spacing={2} sx={{ mt: 3 }}>
        <FeatureBlock
          title="Faust Toolbar"
          codeSnippet="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatum, temporibus dicta non illo iure! Expedita dolor nesciuntiure iste quibusdam deleniti, consectetur commodi, sit corrupti debitis, quaerat dolorem officia."
          codeResult="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatum, temporibus dicta non illo iure! Expedita dolor nesciuntiure iste quibusdam deleniti, consectetur commodi, sit corrupti debitis, quaerat dolorem officia."
          altBlockColor="#ebedf063"
        />

        <FeatureBlock
          title="Gutenberg Block Editor"
          codeSnippet="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatum, temporibus dicta non illo iure! Expedita dolor nesciuntiure iste quibusdam deleniti, consectetur commodi, sit corrupti debitis, quaerat dolorem officia."
          codeResult="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatum, temporibus dicta non illo iure! Expedita dolor nesciuntiure iste quibusdam deleniti, consectetur commodi, sit corrupti debitis, quaerat dolorem officia."
          altBlockColor=""
        />

        <FeatureBlock
          title="Plugin System"
          codeSnippet="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatum, temporibus dicta non illo iure! Expedita dolor nesciuntiure iste quibusdam deleniti, consectetur commodi, sit corrupti debitis, quaerat dolorem officia."
          codeResult="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatum, temporibus dicta non illo iure! Expedita dolor nesciuntiure iste quibusdam deleniti, consectetur commodi, sit corrupti debitis, quaerat dolorem officia."
          altBlockColor="#ebedf063"
        />

        <FeatureBlock
          title="WP Templates"
          codeSnippet="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatum, temporibus dicta non illo iure! Expedita dolor nesciuntiure iste quibusdam deleniti, consectetur commodi, sit corrupti debitis, quaerat dolorem officia."
          codeResult="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatum, temporibus dicta non illo iure! Expedita dolor nesciuntiure iste quibusdam deleniti, consectetur commodi, sit corrupti debitis, quaerat dolorem officia."
          altBlockColor=""
        />
      </Grid>
    </Grid>
  );
}
