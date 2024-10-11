import { FC } from "react";
import Image from "next/image";
import { cn } from "@/utils/merge";
import Icon from "@/components/Icon";

const CartProduct: FC = () => {
  return (
    <div className="flex flex-col gap-5 pl-1 mt-2 overflow-y-auto overflow-x-hidden hide-scrollbar">
      <div className="flex">
        <div className="w-1/4 aspect-square">
          <Image src="/products/beetles.png" alt="beetle" width={200} height={200} className="w-[90%] aspect-square object-cover" />
        </div>
        <div className="w-3/4 flex flex-col gap-3 text-sm font-medium">
          <div>Beetles</div>
          <div className="flex w-full gap-5">
            <div className={cn("w-8 aspect-square rounded-full flex justify-center items-center", "bg-black")}>
              <Icon icon="substract-white" />
            </div>
            <div className="w-1/2 text-center">1.2 kg</div>
            <div className={cn("w-8 aspect-square rounded-full flex justify-center items-center", "bg-black")}>
              <Icon icon="add-white" />
            </div>
            <div className="w-1/3 text-right text-gray-400">
              $5.2
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartProduct;