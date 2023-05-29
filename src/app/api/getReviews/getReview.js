import clientPromise from "../../../lib/mongo";

let client;
let db;
let collection;
let reviews;
const init = async () => {
  if (client) return;
  client = await clientPromise;
};
// init();
const getReviews = async () => {
  if (!client) await init();
  if (!db) {
    db = await client.db("sample_airbnb");
  }
  if (!collection) {
    collection = await db.collection("listingsAndReviews");
  }
  if (!reviews) {
    reviews = await collection.find().limit(100).toArray();
  }
  return reviews;
};

export default getReviews;
