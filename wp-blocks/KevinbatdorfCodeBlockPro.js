import { gql } from "@apollo/client";

export default function KevinbatdorfCodeBlockPro(props) {
  return <div dangerouslySetInnerHTML={{ __html: props.renderedHtml }} />;
}

KevinbatdorfCodeBlockPro.displayName = "KevinbatdorfCodeBlockPro";

KevinbatdorfCodeBlockPro.fragments = {
  key: `KevinbatdorfCodeBlockProFragment`,
  entry: gql`
    fragment KevinbatdorfCodeBlockProFragment on KevinbatdorfCodeBlockPro {
      name
      renderedHtml
    }
  `,
};

/*

TODO: Implement the functionality below.


Copy to clipboard library:
https://www.npmjs.com/package/copy-to-clipboard



Line highlighting CSS code:

pre.shiki {
  padding-inline: 0;
}

pre.shiki .line {
  padding-inline: 2rem;
}

pre.shiki .cbp-line-highlight {
  display: inline-block;
  width: 100%;
  background-color: #3d3d3d;
  padding-block: 0.25rem;
}

*/
