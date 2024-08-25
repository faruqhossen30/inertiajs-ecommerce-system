import { EyeIcon, HeartIcon, HomeIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { Link } from '@inertiajs/react'
import React from 'react'

function ProductItem({ product }) {
    return (
        <div className="col-span-6 md:col-span-4 lg:col-span-2 rounded-lg relative border border-gray-300 hover:border-emerald-500">
            <span className=" bg-emerald-500 text-white px-1 rounded-sm text-xs absolute left-0 top-0 m-2">10% Off</span>
            <div className="flex justify-center p-2 ">
                <div className="">
                    <img src={window.location.origin + '/storage/'+product.thumbnail} className="w-full" alt="" />
                    {/* <span className=" bg-emerald-500 text-white px-1 rounded-md text-xs absolute right-0 top-0 m-1">New</span> */}

                </div>
            </div>
            <div className="px-2">
                <Link href="#" className="text-lg font-semibold text-gray-500">
                    <h3>{product.title}</h3>
                </Link>
                <div className="space-x-3">
                    <span className="text-gray-400 text-xs line-through">${product.price} </span>
                    <span className="text-gray-800 font-xs">${product.price}</span>
                </div>
            </div>
            <div className="space-x-2 py-2 flex justify-center">
                <button className="border border-gray-400 p-1 rounded-md">
                    <HeartIcon className="w-5 h-5 text-gray-400" />
                </button>
                <button className="border border-gray-400 p-1 rounded-md">
                    <EyeIcon className="w-5 h-5 text-gray-400" />
                </button>
                <button className="border border-gray-400 p-1 rounded-md">
                    <ShoppingBagIcon className="w-5 h-5 text-gray-400" />
                </button>
            </div>
        </div>
    )
}

export default ProductItem
