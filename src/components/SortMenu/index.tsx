import { FC } from "react";
import Icon from "../Icon";

const SortMenu: FC = () => {
  return (
    <div className="fixed top-0 w-full h-full bg-transparent z-40">
      <div className="w-full h-full bg-black bg-opacity-40 relative text-base font-medium">
        <div className="absolute flex right-2 top-10 w-44 bg-white rounded-xl border border-gray-400">
          <div className="h-60 w-full relative flex flex-col px-2 pt-7 gap-2">
            <div className="absolute right-2 top-1 w-6 h-6 flex justify-center items-center">
              <Icon icon="cross" />
            </div>
            <div className="flex mt-1">
              <input
                className="text-base rounded-2xl border border-gray-600 w-full px-3"
                type="text"
                name="search"
                placeholder="Search"
              />
            </div>
            <div className="flex flex-col">
              <div className="mb-1 font-bold">Sort by:</div>
              <div className="cursor-pointer">Category</div>
              <div className="cursor-pointer">Price</div>
              <div className="cursor-pointer">Calori</div>
              <div className="cursor-pointer">Protein</div>
            </div>
            <div className="text-sm rounded-2xl bg-black w-full py-1 text-white text-center">
              Apply
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SortMenu;