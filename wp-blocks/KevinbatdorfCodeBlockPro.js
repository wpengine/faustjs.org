import { gql } from "@apollo/client";
import { useState } from "react";

export default function KevinbatdorfCodeBlockPro(props) {
  const { attributes, renderedHtml } = props;
  const showCopyButton = attributes.copyButton;
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(attributes.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000); // Show check mark for 3 seconds
  }

  return (
    <div className="relative">
      <div dangerouslySetInnerHTML={{ __html: renderedHtml }} />
      {showCopyButton ? (
        <button
          onClick={handleCopy}
          title="Copy"
          className="absolute right-1 top-1"
        >
          {copied ? <CheckMarkIcon /> : <CopyIcon />}
          <span className="sr-only">{attributes.copyButtonString}</span>
        </button>
      ) : null}
    </div>
  );
}

function CheckMarkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6 text-gray-400"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 64 64"
      strokeWidth={5}
      stroke="currentColor"
      className="h-6 w-6 text-gray-500 hover:text-gray-400"
    >
      <rect x="11.13" y="17.72" width="33.92" height="36.85" rx="2.5" />
      <path d="M19.35,14.23V13.09a3.51,3.51,0,0,1,3.33-3.66H49.54a3.51,3.51,0,0,1,3.33,3.66V42.62a3.51,3.51,0,0,1-3.33,3.66H48.39" />
    </svg>
  );
}

KevinbatdorfCodeBlockPro.displayName = "KevinbatdorfCodeBlockPro";

KevinbatdorfCodeBlockPro.fragments = {
  key: `KevinbatdorfCodeBlockProFragment`,
  entry: gql`
    fragment KevinbatdorfCodeBlockProFragment on KevinbatdorfCodeBlockPro {
      attributes {
        code
        copyButton
        copyButtonString
      }
      renderedHtml
    }
  `,
};
