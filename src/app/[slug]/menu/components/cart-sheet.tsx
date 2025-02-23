import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { useCartContext } from "../hooks/useCartContext";

function CartSheet() {
  const { isOpen, toggleCart, products } = useCartContext();

  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>Description</SheetDescription>
        </SheetHeader>
        {products.map((product) => (
          <h1 key={product.id}>
            {product.name} {product.quantity}
          </h1>
        ))}
      </SheetContent>
    </Sheet>
  );
}

export default CartSheet;
