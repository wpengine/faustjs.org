import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { getWordPressProps, WordPressTemplate } from "@faustwp/core";
import { WordPressTemplateProps } from "types";

export default function Page(props: WordPressTemplateProps) {
  return <WordPressTemplate {...props} />;
}

export const getStaticProps: GetStaticProps = (ctx) => {
  return getWordPressProps({ ctx });
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
