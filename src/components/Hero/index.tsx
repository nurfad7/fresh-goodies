import { FC } from "react";
import Image from "next/image";
import { cn } from "@/utils/merge";
import Icon from "../Icon";

const Hero: FC = () => {
  return (
    <div className="w-full flex flex-col gap-4 pt-14">
      <div className="w-full overflow-x-auto overflow-y-hidden hide-scrollbar px-2 md:px-5">
        <div className="min-w-max flex gap-5 text-lg font-medium md:justify-between text-center">
          <div className={cn("w-20", "border-b-2 border-b-black")}>All</div>
          <div className={cn("w-20")}>Spicy</div>
          <div className={cn("w-20")}>Dressings</div>
          <div className={cn("w-20")}>Sweet</div>
          <div className={cn("w-20")}>Roots</div>
          <div className={cn("w-20")}>Exotic</div>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-5 md:gap-7">
        <div className="flex flex-col px-5">
          <div className="w-full aspect-square">
            <Image src="/products/beetles.png" alt="beetle" width={200} height={200} className="w-full aspect-square object-cover" />
          </div>
          <div className="text-xl font-medium leading-none">$3.2</div>
          <div className="text-base">Beetles</div>
          <div className="flex justify-between mt-2">
            <div className={cn("w-8 aspect-square rounded-full flex justify-center items-center")}>
              <Icon icon="substract" />
            </div>
            <div>1 kg</div>
            <div className={cn("w-8 aspect-square rounded-full flex justify-center items-center")}>
              <Icon icon="add" />
            </div>
          </div>
        </div>
        <div className="flex flex-col px-5">
          <div className="w-full aspect-square">
            <Image src="/products/cucumber.png" alt="beetle" width={200} height={200} className="w-full aspect-square object-cover" />
          </div>
          <div className="text-xl font-medium leading-none">$3.2</div>
          <div className="text-base">Cucumbers</div>
          <div className="flex justify-between mt-2">
            <div className={cn("w-8 aspect-square rounded-full flex justify-center items-center", "bg-black")}>
              <Icon icon="substract-white" />
            </div>
            <div>1.2 kg</div>
            <div className={cn("w-8 aspect-square rounded-full flex justify-center items-center", "bg-black")}>
              <Icon icon="add-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="fixed w-full h-20 px-3 py-2 bottom-10 z-30">
        <div className="rounded-full w-full h-full bg-black flex justify-between items-center px-7 text-white text-xl font-medium">
          <div className="flex h-full items-center gap-2">
            <div>Cart</div>
            <div className="flex h-full py-3">
              <div className="h-full aspect-square">
                <Image src="/products/beetles.png" alt="beetle" width={100} height={100} className="w-full aspect-square object-cover rounded-full" />
              </div>
              <div className="h-full aspect-square">
                <Image src="/products/beetles.png" alt="beetle" width={100} height={100} className="w-full aspect-square object-cover rounded-full" />
              </div>
            </div>
          </div>
          <div>
            $27.3
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;