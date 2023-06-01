import { SignJWT, jwtVerify } from "jose";
export const signJWT = async (
  payload: Record<string, string>,
  options: { exp: string | number }
) => {
  try {
    const secret = new TextEncoder().encode(process.env.NEXT_AUTH_SECRET);
    const alg = "HS256";
    return new SignJWT(payload)
      .setProtectedHeader({ alg })
      .setExpirationTime(options.exp)
      .setIssuedAt()
      .setSubject(payload.sub)
      .sign(secret);
  } catch (error) {
    throw error;
  }
};

export const verifyJWT = async <T>(token: string): Promise<T> => {
  try {
    return (
      await jwtVerify(
        token,
        new TextEncoder().encode(process.env.NEXT_AUTH_SECRET)
      )
    ).payload as T;
  } catch (error) {
    throw new Error("Your token has expired.");
  }
};
