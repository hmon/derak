'use server';

import { db } from '@derak/shared-utils';
import { posts, users } from '@derak/shared-models';
import { auth } from '../../auth';
import { eq } from 'drizzle-orm';

export async function createPost(title: string, text: string) {
  const session = await auth();

  if (!session?.user) return;

  const result = await db
    .select()
    .from(users)
    .where(eq(users.email, session.user.email));

  const user = result[0];

  if (!user) return;

  await db.insert(posts).values({
    excerpt: text.slice(0, 100),
    content: text,
    title: title,
    authorId: user.id,
  });
}
