import React from 'react';

function ContentLayoutConstrained({ content }: { content: string }) {
  return (
    <div className="is-layout-constrained" dangerouslySetInnerHTML={{ __html: content }}>
    </div>
  );
}

function ContentLayoutFlow({ content }: { content: string }) {
  return (
    <div className="is-layout-flow" dangerouslySetInnerHTML={{ __html: content }}>
    </div>
  );
}

export const ContentLayout = {
  Constrained: ContentLayoutConstrained,
  Flow: ContentLayoutFlow
};
