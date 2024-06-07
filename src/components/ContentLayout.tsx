import React from 'react';

function ContentLayoutConstrained({ content }: { content: string }) {
  return (
    <div
      className="is-layout-constrained"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

function ContentLayoutFlow({ content }: { content: string }) {
  return (
    <div
      className="is-layout-flow"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

export const ContentLayout = {
  Constrained: ContentLayoutConstrained,
  Flow: ContentLayoutFlow,
};
