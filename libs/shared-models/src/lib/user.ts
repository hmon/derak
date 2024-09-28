import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: integer('id').primaryKey(),
  fullName: text('full_name'),
  phone: text('phone'),
  email: text('email').unique(),
  password: text('password'),
});

export type User = typeof users.$inferSelect; // return type when queried
export type InsertUser = typeof users.$inferInsert; // insert type
