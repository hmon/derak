"use client"

import { Button } from '@derak/shared-components';
import { useForm } from 'react-hook-form';
import { createComment } from '../post/[id]/actions';

import styles from './comment-form.module.scss';

type Inputs = {
  email: string;
  content: string;
};

interface CommentFormProps {
  postId: number;
}

export function CommentForm({ postId }: CommentFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit = (data: Inputs) => {
    createComment(postId, data.email, data.content);
  }

  return (
    <form className={styles.commentForm} onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Email" {...register("email", { required: true })}/>
      {errors.email?.type === 'required' && <p role="alert">* Email is required</p>}

      <textarea placeholder="Add comment..." {...register("content", { required: true })}/>
      {errors.content?.type === 'required' && <p role="alert">* Comment is required</p>}

      <div className={styles.commentPublish}>
        <Button type="submit" size="lg">Submit</Button>
      </div>
    </form>
  )
}
