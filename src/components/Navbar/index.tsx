import { FC } from "react";
import Icon from "@/components/Icon"

const Navbar: FC = () => {
  return (
    <div className="flex justify-between items-center px-3 md:px-7 h-12 md:h-14 w-full absolute z-10">
      <div className="text-xl text-gray-700 font-medium">
        Vegetables
      </div>
      <div className="flex gap-5 md:gap-10">
        <Icon icon="sliders" />
        <Icon icon="search" />
      </div>
    </div>
  )
}

export default Navbar;