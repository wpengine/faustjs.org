import { gql } from '@apollo/client';
import { useBlocksTheme } from '@faustwp/blocks/dist/mjs/components/WordPressBlocksProvider.js';
// import { ContentBlock } from '@faustwp/blocks/dist/mjs/components/WordPressBlocksViewer.js';
import { getStyles } from '@faustwp/blocks/dist/mjs/utils/index.js';

// export type CoreQuoteFragmentProps = ContentBlock & {
//   attributes?: {
//     anchor?: string;
//     backgroundColor?: string;
//     citation?: string;
//     className?: string;
//     fontFamily?: string;
//     fontSize?: string;
//     gradient?: string;
//     lock?: string;
//     style?: string;
//     textColor?: string;
//     textAlign?: string;
//     value?: string;
//     cssClassName?: string;
//   };
// };

export function CoreQuote(props) {
  const theme = useBlocksTheme();
  const style = getStyles(theme, { ...props });
  const { attributes } = props;

  if (!attributes?.value) {
    return null;
  }

  let innerHtml = attributes.value;

  if (attributes?.citation) {
    innerHtml += `<cite>${attributes.citation}</cite>`;
  }

  return (
    <blockquote
      className={attributes?.cssClassName}
      style={style}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: innerHtml }}
    />

  );
}

CoreQuote.fragments = {
  key: `CoreQuoteBlockFragment`,
  entry: gql`
    fragment CoreQuoteBlockFragment on CoreQuote {
      attributes {
        
        anchor
        backgroundColor
        citation
        className
        fontFamily
        fontSize
        gradient
        lock
        style
        textColor
        textAlign
        value
        cssClassName
      }
    }
  `,
};

CoreQuote.config = {
  name: 'CoreQuote',
};

CoreQuote.displayName = 'CoreQuote';