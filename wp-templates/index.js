import page from "./page";
import single from "./single";
import DocsArchive from "./docs-archive";
import SingleDoc from "./single-doc";
import IndexTemplate from "./IndexTemplate";
import BlogIndex from "./blog-page";

export default {
  index: IndexTemplate,
  page,
  single,
  "archive-doc": DocsArchive,
  "single-doc": SingleDoc,
  "page-blog-page": BlogIndex,
};
