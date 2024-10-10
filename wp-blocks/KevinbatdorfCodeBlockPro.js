import { gql } from "@apollo/client";
import { useState } from "react";

import { ClipboardDocumentIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

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
          {copied ? <CheckCircleIcon className="h-6 w-6 text-gray-400" /> : <ClipboardDocumentIcon className="h-6 w-6 text-gray-500 hover:text-gray-400" />}
          <span className="sr-only">{attributes.copyButtonString}</span>
        </button>
      ) : null}
    </div>
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
