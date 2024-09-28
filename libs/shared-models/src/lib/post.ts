import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core';
import { relations } from 'drizzle-orm';
import { users } from './user';
import { comments } from './comment';

export const posts = sqliteTable('posts', {
  id: integer('id').primaryKey(),
  title: text('title'),
  excerpt: text('excerpt', { length: 100 }),
  content: text('content'),
  authorId: integer('author_id'),
});

export const postRelations = relations(posts, ({ one, many }) => ({
  author: one(users, {
    fields: [posts.authorId],
    references: [users.id],
  }),
  comments: many(comments)
}));

export type Comment = typeof comments.$inferSelect; // return type when queried
export type InsertComment = typeof comments.$inferInsert; // insert type
