
import Image from 'next/image'
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline'

function Header() {
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="flex flex-grow sm:flex-grow-0 mt-0">
          <Image
            className="rounded-full cursor-pointer"
            src="/images/kamstore2.jpg"
            width={150}
            height={60}
            objectFit="contain"
          />
        </div>
        <div className="hidden ml-5 items-center h-10 rounded-md flex-grow cursor-pointer sm:flex bg-amazon_blue-gold hover:bg-amazon_blue-goldhover">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4 bg-gray-200"
            type="text"
          />
          <SearchIcon className="h-12 p-4 text-white" />
        </div>

        {/* Right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Hello Kam Lider</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>

          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          <div className="link relative flex items-center">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-amazon_blue-gold text-center rounded-full text-black font-bold">
              0
            </span>

            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* bottom nav bar */}
      <div className="flex items-center space-x-10 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex align-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Video</p>
        <p className="link">Kam's Buisness</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Sarees</p>
        <p className="link hidden lg:inline-flex">Wedding Atire</p>
        <p className="link hidden lg:inline-flex">Price</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
}

export default Header