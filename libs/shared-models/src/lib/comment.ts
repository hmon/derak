import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core';
import { relations } from 'drizzle-orm';
import { posts } from './post';

export const comments = sqliteTable('comments', {
  id: integer('id').primaryKey(),
  content: text('content'),
  email: text('email'),
  postId: integer('post_id'),
});

export const commentsRelations = relations(comments, ({ one }) => ({
  post: one(posts, {
    fields: [comments.postId],
    references: [posts.id],
  }),
}));
