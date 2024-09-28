'use client';

import { forwardRef } from 'react';

import {
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  toolbarPlugin,
  KitchenSinkToolbar,
  MDXEditor,
  type MDXEditorMethods,
  type MDXEditorProps,
} from '@mdxeditor/editor';

import '@mdxeditor/editor/style.css';

export const TextEditor = forwardRef<MDXEditorMethods, MDXEditorProps>(
  (props, ref) => {
    return (
      <MDXEditor
        plugins={[
          toolbarPlugin({ toolbarContents: () => <KitchenSinkToolbar /> }),
          headingsPlugin(),
          listsPlugin(),
          quotePlugin(),
          thematicBreakPlugin(),
          markdownShortcutPlugin(),
        ]}
        {...props}
        ref={ref}
      />
    );
  }
);
