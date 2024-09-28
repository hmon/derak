import { signIn } from '../../auth';
import { redirect } from 'next/navigation';

export default function Login() {
  const action = async (formData: FormData) => {
    'use server';
    await signIn('credentials', formData);
    redirect('/');
  }

  return (
    <form action={action}>
      <label>
        Email
        <input name="email" type="email" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button>Sign In</button>
    </form>
  );
}
