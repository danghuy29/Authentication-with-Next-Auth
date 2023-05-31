import clientPromise from "lib/mongo";
export const login = async (email: string) => {
  try {
    const client = await clientPromise;
    const db = await client.db("authentication");
    const res = await db.collection("login").findOne({ email: email });
    return res;
  } catch (err) {
    throw err;
  }
};
