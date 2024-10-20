const lunr = require("lunr");
const fs = require("fs");
const path = require("path");

// Helper function to recursively get all markdown files
function getAllMarkdownFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    const filePath = path.join(dirPath, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      // If it's a directory, recurse into it
      arrayOfFiles = getAllMarkdownFiles(filePath, arrayOfFiles);
    } else if (filePath.endsWith(".mdx") || filePath.endsWith(".md")) {
      // If it's a markdown file, add it to the array
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles;
}

// Custom function to extract metadata
function extractMetadata(fileContent) {
  const metadataRegex = /export const metadata = ({[\s\S]*?});/;
  const match = fileContent.match(metadataRegex);

  if (match) {
    try {
      const metadata = eval("(" + match[1] + ")");
      return metadata;
    } catch (err) {
      console.error("Error parsing metadata:", err);
    }
  }

  return {}; // Return empty object if no metadata is found
}

function createIndex() {
  const docsDirectory = path.join(process.cwd(), "pages", "docs");

  // Get all markdown files, including those in subdirectories
  const markdownFiles = getAllMarkdownFiles(docsDirectory);

  // Store documents separately
  const documents = [];

  const idx = lunr(function () {
    this.ref("id");
    this.field("title");
    this.field("body");

    markdownFiles.forEach((filePath, id) => {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const metadata = extractMetadata(fileContent);
      const content = fileContent
        .replace(/export const metadata = ({[\s\S]*?});/, "")
        .trim(); // Remove metadata section

      // Remove process root and "pages" from the file path
      let relativePath = filePath.replace(process.cwd(), "");

      // Ensure we only replace the first occurrence of "/pages/docs"
      relativePath = relativePath.replace("/pages/docs", "/docs");

      // Remove the file extension
      relativePath = relativePath.replace(/\.mdx?$/, "");

      // Remove trailing '/index' if present for clean URLs
      relativePath = relativePath.replace(/\/index$/, "");

      // Construct the document object
      const doc = {
        id: id.toString(),
        title: metadata.title || path.basename(filePath),
        body: content,
        path: relativePath, // Corrected path for Next.js
      };

      documents.push(doc); // Add document to the store
      this.add(doc); // Add document to the index
    });
  });

  return { idx, documents };
}

module.exports = { createIndex };
