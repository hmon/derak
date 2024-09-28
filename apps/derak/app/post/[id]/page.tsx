import styles from '../../page.module.scss';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getPostById } from './actions';
import { CommentForm } from '../../_components/comment-form';

export default async function Post({ params }: { params: { id: number } }) {
  const post = await getPostById(params.id);

  if (!post) redirect('/');

  return (
    <main className="wrapper">
      <h1 className="font-title">Posts</h1>
      <div className="container">
        <article className={styles.article} key={post.id}>
          <Link className="unstyled" href={`/post/${post.id}`}>
            <h2 className={`font-title ${styles.articleTitle}`}>
              {post.title}
            </h2>
          </Link>
          <p className="font-body">{post.content}</p>
          <p className="font-small">Author: {post.author?.fullName}</p>

          <h2 className={styles.commentHeadline}>Comments <span className={styles.commentCount}>{post.comments.length}</span></h2>

          <div className={styles.commentArea}>
            <CommentForm postId={params.id}/>
          </div>

          {post.comments.map((comment) => (
            <div className={styles.comment} key={comment.id}>
              <p className={styles.commentAuthor}>{comment.email}</p>
              <p className="font-small">{comment.content}</p>
            </div>
          ))}
        </article>
      </div>
    </main>
  );
}
