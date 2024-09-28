'use client';

import React, { useState } from 'react';
import { TextEditor, Button } from '@derak/shared-components';
import { createPost } from "./actions";

import styles from './dashboard.module.scss';

const Dashboard = () => {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');

  return (
    <>
      <nav className={styles.dashboardNav}>
        <div className={`fullWidth container ${styles.dashboardNavInner}`}>
          <Button onClick={() => createPost(title, text)} size="lg">Publish</Button>
        </div>
      </nav>

      <div className={`container ${styles.dashboard}`}>
        <input
          className={styles.dashboardTitle}
          contentEditable
          placeholder="New post title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div>
          <TextEditor markdown={text} onChange={setText} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
