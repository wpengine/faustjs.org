import { createIndex } from "@/lib/search";

let indexData = null;

export default function handler(req, res) {
  if (!indexData) {
    indexData = createIndex(); // Get both index and documents
  }

  const { idx, documents } = indexData; // Destructure index and documents

  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ message: "Query is required" });
  }

  const results = idx.search(query);

  // Create a map for quick lookup of documents by id
  const docMap = {};
  documents.forEach((doc) => {
    docMap[doc.id] = doc;
  });

  res.status(200).json(
    results.map((result) => {
      const doc = docMap[result.ref];
      return {
        ref: result.ref,
        title: doc.title,
        excerpt: doc.body.slice(0, 100),
        path: doc.path, // Include the path if you need to link to the document
      };
    }),
  );
}
