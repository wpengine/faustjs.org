import React from "react";
import { getWordPressProps, WordPressTemplate } from "@faustwp/core";
import { GetStaticProps } from "next";
import { WordPressTemplateProps } from "types";

export default function Page(props: WordPressTemplateProps) {
  return <WordPressTemplate {...props} />;
}

export const getStaticProps: GetStaticProps = (ctx) => {
  return getWordPressProps({ ctx });
};
