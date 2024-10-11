import CartProduct from "@/components/CartProduct";
import Icon from "@/components/Icon";
import { FC } from "react";

const Cart: FC = () => {
  return (
    <div className="pt-10 px-5 w-full h-full">
      <Icon icon="cross" />
      <div className="flex flex-col gap-3 pl-1 mt-2">
        <div className="text-2xl font-bold mb-5">Cart</div>
        <div className="flex mb-5">
          <div className="w-1/4">
            <Icon icon="shipping" />
          </div>
          <div className="text-sm font-medium border-b-2 border-b-green-500">Before free shipping $1.67</div>
        </div>
      </div>
      <CartProduct />
      <div className="fixed w-full h-20 px-3 py-2 left-0 bottom-10 z-10">
        <div className="rounded-full w-full h-full bg-black flex justify-between items-center px-5 text-white text-xl font-medium">
          <div className="flex h-full items-center gap-2">
            <div>Check out</div>
          </div>
          <div>
            $27.3
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;