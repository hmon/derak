"use server"

import { db } from '@derak/shared-utils';

export async function getAllPosts() {
  return db.query.posts.findMany({
    columns: {
      authorId: false
    },
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
