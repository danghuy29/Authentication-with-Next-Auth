import clientPromise from "lib/mongo";

export const signUp = async (user: string, password: string, email: string) => {
  try {
    const client = await clientPromise;
    const db = await client.db("authentication");
    const res = await db
      .collection("login")
      .insertOne({ user, password, email });
    return res;
  } catch (e) {
    throw e;
  }
};
