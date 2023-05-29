import getReviews from "./api/getReviews/getReview";
import Authentication from "./components/AuthenComponent/AuthenComponent";
export default async function Home() {
  // const res = await fetch("https:localhost:3000/api/reviews");
  const reviews = await getReviews();
  console.log(reviews)
  console.log(reviews);
  return (
    <main>
      {reviews.map((item: any) => (
        <div className="text-white text-sm" key={item.name}>{item.summary}</div>
      ))}
      <Authentication />
    </main>
  );
}
