import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { saltAndHashPassword, db } from '@derak/shared-utils';
import { users } from '@derak/shared-models';
import { and, eq } from 'drizzle-orm';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },

      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Missing credentials');
        }
        const pwHash = await saltAndHashPassword(credentials.password);
        const result = await db
          .select()
          .from(users)
          .where(
            and(
              eq(users.email, credentials.email),
              eq(users.password, pwHash)
            )
          ).limit(1);

        const user = result[0];

        if (!user) {
          // No user found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          throw new Error('User not found.');
        }

        // return user object with their profile data
        return user as any;
      },
    }),
  ],
});
