import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { formatCurrency } from "@/helpers/format-currency";

import { useCartContext } from "../hooks/useCartContext";
import CartProductItem from "./cart-product-item";
import FinishOrderDialog from "./finish-order-dialog";

function CartSheet() {
  const { isOpen, toggleCart, products, total } = useCartContext();
  const [finishOrderDialogIsOpen, setFinishOrderDialoagIsOpen] =
    useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetContent className="w-[85%]">
        <SheetHeader>
          <SheetTitle className="text-left">Sacola</SheetTitle>
        </SheetHeader>
        <div className="flex h-full flex-col py-5">
          <div className="flex-auto space-y-4">
            {products.map((product) => (
              <CartProductItem key={product.id} product={product} />
            ))}
          </div>

          <Card className="mb-6">
            <CardContent className="p-5">
              <div className="flex justify-between">
                <p className="text-sm text-muted-foreground">Total</p>
                <p className="text-sm font-semibold">{formatCurrency(total)}</p>
              </div>
            </CardContent>
          </Card>

          <Button
            className="w-full rounded-full"
            onClick={() => setFinishOrderDialoagIsOpen(true)}
          >
            Finalizar pedido
          </Button>

          <FinishOrderDialog
            open={finishOrderDialogIsOpen}
            onOpenChange={setFinishOrderDialoagIsOpen}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default CartSheet;
