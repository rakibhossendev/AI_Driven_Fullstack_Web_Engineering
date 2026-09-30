import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL,
});

export const { useSession, signIn, signUp, signOut,updateUser,requestPasswordReset,resetPassword} = authClient;
/*
* sign up: register : create Account: First time.
* sign in: log in : already have account: Repeated user.
*/
