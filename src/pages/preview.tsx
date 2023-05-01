import React from "react";
import { WordPressTemplate } from "@faustwp/core";
import { WordPressTemplateProps } from "../types.js";

export default function Preview(props: WordPressTemplateProps) {
  return <WordPressTemplate {...props} />;
}
