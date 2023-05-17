import { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";
import { getGraphqlEndpoint } from "@faustwp/core";

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
  schema: getGraphqlEndpoint(),
  documents: ["src/**/*.{tsx,ts}"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
