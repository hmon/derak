"use server"

import { db } from '@derak/shared-utils';
import { eq } from 'drizzle-orm';
import { comments, posts } from '@derak/shared-models';

export async function getPostById(id: number) {
  return db.query.posts.findFirst({
    where: eq(posts.id, id),
    with: {
      comments: {
        columns: {
          id: true,
          email: true,
          content: true
        }
      },
      author: {
        columns: {
          id: true,
          fullName: true
        }
      }
    }
  });
}

export async function createComment(postId: number, email: string, content: string) {
  return db.insert(comments).values({
    postId,
    email,
    content,
  });
}
