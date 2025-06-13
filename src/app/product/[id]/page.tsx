import ProductIdReviewForm from "../components/productIdreveiwForm";
import { getProductReviews } from "@/database/services/userService";
import Link from "next/link";



export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params

  const reviews  = await getProductReviews(id)
  const reviewArray = Array.isArray(reviews) ? reviews : [reviews];

  console.log(reviews)

  if (!reviews) {
    return (
      <div className=" h-[50vh] flex flex-col justify-center items-center text-center mx-auto font-bold bg-gray-100">
        <p>Product not found...</p>
        <div>
          <Link className="underline text-blue-500 p-2 hover:text-blue-700" href={"/product"}>Go Back</Link>
        </div>
      </div>
    )
  }


  return (
    <div className="max-w-5xl mx-auto p-4 md:p-10">
      {/* Pass productId down so the form knows where to save */}
      <ProductIdReviewForm/>

      <div className="mt-10 bg-green-100 p-1 md:p-3 rounded-sm">
        <h2 className="p-3 text-xl text-white font-semibold mb-4 bg-green-700 rounded-sm">
          Customer Reviews
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {reviewArray.length < 1 ? (
            <div>No reviews!</div>
          ) : (
            [...reviewArray].reverse().map((review, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-lg shadow-sm border"
              >
                <div className="flex justify-between mb-2">
                  <span className="text-yellow-500">
                    {"★".repeat(review?.stars) + "☆".repeat(5 - review?.stars)}
                  </span>
                </div>
                <p className="text-gray-700 text-sm">{review?.comment}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );

}
