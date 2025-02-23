import { notFound } from "next/navigation";

import { getProductById } from "@/data/get-product-by-id";

import ProductDetails from "./components/product-details";
import ProductHeader from "./components/product-header";

interface ProductPageProps {
  params: Promise<{ slug: string; productId: string }>;
}

async function ProductPage({ params }: ProductPageProps) {
  const { slug, productId } = await params;

  const product = await getProductById(productId);

  if (!product) return notFound();

  if (product.restaurant.slug.toUpperCase() !== slug.toUpperCase()) {
    return notFound();
  }

  return (
    <div className="flex h-full flex-col">
      <ProductHeader product={product} />
      <ProductDetails product={product} />
    </div>
  );
}

export default ProductPage;
