import { FC } from "react";
import { cn } from "@/utils/merge";
import Icon from "../Icon";

const Overlay: FC = () => {
  return (
    <div className="fixed top-0 w-full h-full bg-transparent z-20">
      <div className="w-full h-full bg-black bg-opacity-40 relative text-base font-medium">
        <div className="absolute flex flex-col bottom-0 w-full h-[95%] rounded-t-[2rem] bg-white pt-10 px-5 gap-7">
          <div className="w-full h-1/2 flex gap-5 justify-center items-center">
            <div>-</div>
            <div>Photo</div>
            <div>-</div>
          </div>
          <div className="text-2xl font-semibold">Garlic</div>
          <div>In 100 grams</div>
          <div className="grid grid-cols-4 p-5 gap-5">
            <div className="flex flex-col justify-center items-center text-center">
              <div>143</div>
              <div className="text-sm text-gray-400">calorie</div>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <div>6.5</div>
              <div className="text-sm text-gray-400">proteins</div>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <div>0.5</div>
              <div className="text-sm text-gray-400">fats</div>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <div>29.9</div>
              <div className="text-sm text-gray-400">carbs</div>
            </div>
          </div>
          <div className="flex px-7 gap-5">
            <div className={cn("w-8 aspect-square rounded-full flex justify-center items-center", "bg-black")}>
              <Icon icon="substract-white" />
            </div>
            <div className="w-1/2 text-center">1.2 kg</div>
            <div className={cn("w-8 aspect-square rounded-full flex justify-center items-center", "bg-black")}>
              <Icon icon="add-white" />
            </div>
            <div className="w-8 flex justify-center items-center">
              <Icon icon="heart" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overlay;