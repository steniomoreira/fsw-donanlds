import { ConsumptionMethod } from "@prisma/client";
import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import RestaurantCategories from "./components/categories";
import RestaurantHeader from "./components/header";

interface RestaurantMenuPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ consumptionMethos: ConsumptionMethod }>;
}

const isConsumptionMethos = (consumptionMethod: ConsumptionMethod) => {
  return ["DINE_IN", "TAKEAWAY"].includes(consumptionMethod.toUpperCase());
};

async function RestaurantMenuPage({
  params,
  searchParams,
}: RestaurantMenuPageProps) {
  const { slug } = await params;
  const { consumptionMethos } = await searchParams;

  if (!isConsumptionMethos(consumptionMethos)) {
    return notFound();
  }

  const restaurant = await db.restaurant.findUnique({ where: { slug }, include: {
    menuCategories: {
      include: { products: true}
    }
  } });  

  if (!restaurant) {
    return notFound();
  }

  return (
    <div>
      <RestaurantHeader restaurant={restaurant} />
      <RestaurantCategories restaurant={restaurant} />
    </div>
  );
}

export default RestaurantMenuPage;
