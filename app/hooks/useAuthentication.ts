"use client";
import { Amplify, Auth } from "aws-amplify";
import awsExports from "../service/aws-exports";
const useAuthentication = () => {
  Amplify.configure({
    Auth: {
      aws_cognito_region: awsExports.REGION,
      userPoolId: awsExports.USER_POOL_ID,
      userPoolWebClientId: awsExports.USER_POOL_APP_CLIENT_ID,
      // usernameAlias: "email",
    },
  });

  const signUp = async (username: string, password: string, email: string) => {
    const input = {
      username,
      password,
      attributes: {
        email, // optional
        // other custom attributes
      },
    } as any;
    try {
      await Auth.signUp(input);
    } catch (error) {
      throw error;
    }
  };

  const logIn = async (email: string, password: string) => {
    try {
      const user = await Auth.signIn(email, password);
      if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
        await Auth.completeNewPassword(user, "Nhathuy06152904@");
      }
    } catch (error) {
      throw error;
    }
  };

  const logOut = async () => {
    try {
      await Auth.signOut();
    } catch (error) {
      throw error;
    }
  };

  const getSession = async () => {
    try {
      const session = await Auth.currentSession();
      return session;
      // This will log the user token in the console
    } catch (e) {
      throw e;
    }
  };
  return { signUp, logIn, logOut, getSession };
};

export default useAuthentication;
