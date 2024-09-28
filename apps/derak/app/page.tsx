import styles from './page.module.scss';
import { getAllPosts } from './actions';
import { ArrowUpRight01Icon } from 'hugeicons-react';
import Link from 'next/link';

export default async function Index() {
  const posts = await getAllPosts();

  return (
    <main className="wrapper">
      <h1 className="font-title">Posts</h1>
      <div className="container">
        {posts.map((post) => (
          <article className={styles.article} key={post.id}>
            <Link className="unstyled" href={`/post/${post.id}`}>
              <h2 className={`font-title ${styles.articleTitle}`}>
                {post.title}
              </h2>
            </Link>
            <p className="font-body">{post.excerpt}</p>
            <Link
              className={`font-small ${styles.articleLink}`}
              href={`/post/${post.id}`}
            >
              Read more <ArrowUpRight01Icon size={14} />
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
