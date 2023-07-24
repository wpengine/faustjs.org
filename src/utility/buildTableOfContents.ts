import { HeaderItem } from '../types';

// headerRegex is for parsing the tag in the form <h[#] [any classes, ids, etc]> [Text] </h[#]>
const headerRegex = /<(h[1-6]{1})[^>]*id="([^>]*)">(.*)<\/h[1-6]{1}>/g;
// remove <code> tags in the title, and characters that didn't translate (example: &nbsp; )
const codeRegex = /<\/*code>(&nbsp;)*/g;
const unrenderedChar = /&.{4,5};/g;

// use regex to find all headings in content
function extractHeaders(content: string) {
  const arr = [...content.matchAll(headerRegex)];
  return arr;
}

export function buildTableOfContents(content: string) {
  const returnDict: HeaderItem[] = [];
  const headers = extractHeaders(content);

  for (let ind = 0; ind < headers.length; ind += 1) {
    const element = headers[ind];

    const tagName = element[1];
    const id = `#${element[2]}`;
    const headerText = element[3];
    let headerTitle = headerText;

    if (headerText.search('<a href') !== -1) {
      headerTitle = headerText.substring(0, headerText.search('<a href'));
    }

    headerTitle = headerTitle
      .replace(codeRegex, ' ')
      .replace(unrenderedChar, '');

    returnDict.push({ id, tagName, title: headerTitle });
  }

  return returnDict;
}
