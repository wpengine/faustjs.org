import { HeaderItem } from '../types';

// headerRegex is for parsing the tag in the form <h[#] [any classes, ids, etc]> [Text] </h[#]>
const headerRegex = /<(h[1-6]{1})[^>]*>(.*)<\/h[1-6]{1}>/g;
// headerLinkRegex is for parsing the anchor from existing <a href> tags if included in header
const headerLinkRegex = /#[\w-]*">/g;
// remove <code> tags in the title, and characters that didn't translate (example: &nbsp; )
const codeRegex = /<\/*code>(&nbsp;)*/g;
const unrenderedChar = /&.{4,5};/g;

// use regex to find all headings in content
function extractHeaders(content: string) {
  const arr = [...content.matchAll(headerRegex)];
  return arr;
}

export function buildTableOfContents(content: string, title?: string) {
  const returnDict: HeaderItem[] = [];
  const headers = extractHeaders(content);

  for (let ind = 0; ind < headers.length; ind += 1) {
    const element = headers[ind];

    let id = '#';
    const tagName = element[1];
    const headerText = element[2];
    let headerTitle;

    if (headerText.search('<a href') === -1) {
      // this section creates an anchor link if not included
      // however, since a doesn't already exist, the link to it in the sidebar won't work
      headerTitle = headerText
        .replace(codeRegex, ' ')
        .replace(unrenderedChar, '');
      id += headerTitle
        .replace(/[.,/#!$%^&*;:{}=\-_`~()?]/g, ' ') // replace punctuation
        .replace(/\s{2,}/g, ' ') // ensure spaces are only 1 character long
        .toLowerCase()
        .trim()
        .replaceAll(/\s/g, '-'); // replace spaces with -
    } else {
      // extract anchor from existing tag
      headerTitle = headerText
        .substring(0, headerText.search('<a href'))
        .replace(codeRegex, ' ')
        .replace(unrenderedChar, '');
      const idValues = Array(headerText.match(headerLinkRegex));

      if (idValues[0] !== null) {
        id = `${idValues[0]}`;
        id = id.substring(0, id.length - 2);
      }
    }

    if (title === 'Faust Plugin System Filters') {
      if (tagName !== 'h3') {
        returnDict.push({ id, tagName, title: headerTitle });
      }
    } else {
      returnDict.push({ id, tagName, title: headerTitle });
    }
  }

  return returnDict;
}
