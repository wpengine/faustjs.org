const fs = require("node:fs/promises");
const path = require("node:path");
const { htmlToText } = require("html-to-text");

module.exports = function smartSearchPlugin({ endpoint, accessToken }) {
  return {
    apply: (compiler) => {
      compiler.hooks.done.tapPromise("SmartSearchPlugin", async () => {
        try {
          const pages = await collectPages(
            path.join(process.cwd(), "pages/docs"),
          );
          pages.push({
            id: "test-document",
            data: {
              title: "Test Document",
              content: "This is a test document for indexing.",
              path: "/test-path",
            },
          });
          await sendPagesToEndpoint(pages, endpoint, accessToken);
        } catch (error) {
          console.error("Error sending pages:", error);
        }
      });
    },
  };
};

async function collectPages(dir) {
  const pages = [];
  const files = await fs.readdir(dir);

  console.log("Inspecting directory:", dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = await fs.stat(filePath);

    if (stat.isDirectory()) {
      const subPages = await collectPages(filePath);
      pages.push(...subPages);
    } else if (file.endsWith(".mdx")) {
      console.log("MDX file found:", filePath);

      const content = await fs.readFile(filePath, "utf-8");

      // Safely extract metadata using regex
      const metadataMatch = content.match(
        /export const metadata = ({[\s\S]+?});/,
      );
      let metadata = {};

      if (metadataMatch) {
        try {
          metadata = eval(`(${metadataMatch[1]})`); // Parse the metadata block
          console.log("Extracted metadata:", metadata);
        } catch (error) {
          console.error("Error parsing metadata:", error);
        }
      }

      const textContent = htmlToText(content);
      const id = filePath
        .replace(process.cwd(), "")
        .replace(/\//g, "-")
        .replace(".mdx", "");

      pages.push({
        id: id,
        data: {
          title: metadata.title || null, // No fallback to "Untitled Document"
          content: textContent,
          path: filePath.replace(process.cwd(), ""),
        },
      });
    }
  }

  console.log("Pages collected:", pages);
  return pages;
}

const query = `
  mutation CreateIndexDocument($input: DocumentInput!) {
    index(input: $input) {
      success
      code
      message
      document {
        id
        data
      }
    }
  }
`;

async function sendPagesToEndpoint(pages, endpoint, accessToken) {
  if (!pages.length) {
    console.warn("No documents found for indexing.");
    return;
  }

  for (const page of pages) {
    const documentId = `mdx:${page.id}`;
    const variables = {
      input: {
        id: documentId,
        data: {
          content: page.data.content,
          path: page.data.path,
          title: page.data.title || null, // No fallback to "Untitled Document"
        },
      },
    };

    console.log(
      `Indexing document: ${page.data.title || "No title"} at ${page.data.path}`,
    );

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ query, variables }),
      });

      const result = await response.json();
      if (result.errors) {
        console.error("GraphQL indexing error:", result.errors);
      } else {
        console.log(
          `Document indexed: ${page.data.title || "No title"} (ID: ${documentId})`,
        );
      }
    } catch (error) {
      console.error(
        "Error indexing document:",
        page.data.title || "No title",
        error,
      );
    }
  }
}
