import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

export default async function signUp(email: string, password: string) {
  const auth = getAuth();
  let result = null,
    error = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
