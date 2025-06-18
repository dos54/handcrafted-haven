import { getProductByUserId } from "@/database/services/userService";
import ProductPerProfileComponent from "../../profile/components/products";
import { notFound } from "next/navigation";

export default async function productPerProfile({
  params,
}: {
  params:  Promise<{ userId: string }>;
}) {
  const { userId } = await params

  const products = await getProductByUserId(userId);
  if (!products) {
    notFound();
  }

  return <ProductPerProfileComponent products = {products} />;
}

