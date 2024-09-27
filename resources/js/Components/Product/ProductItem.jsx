import AppContext from '@/Context/AppContext';
import { EyeIcon, HeartIcon, HomeIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { Link } from '@inertiajs/react'
import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'

function ProductItem({ product }) {
    const {quickView,setQuickView} = useContext(AppContext);
    return (
        <div className="group col-span-6 md:col-span-4 lg:col-span-2 rounded-lg relative  border-gray-300 hover:border-emerald-500">
            <span className=" bg-emerald-500 text-white px-1 rounded-sm text-xs absolute left-0 top-0 m-2">10% Off</span>
            <div className="flex justify-center p-1">
                <div className=" overflow-hidden">
                    <img src={window.location.origin + '/storage/' + product.thumbnail} className="w-full group-hover:scale-105" alt="" />
                    {/* <span className=" bg-emerald-500 text-white px-1 rounded-md text-xs absolute right-0 top-0 m-1">New</span> */}
                    <div className="inline-flex flex-col space-y-1 absolute top-0 right-0 p-2 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <button className="border hover:bg-emerald-500 border-gray-400 p-1 rounded-full bg-white">
                            <HeartIcon className="w-5 h-5 text-gray-400 hover:text-white" />
                        </button>
                        <button onClick={()=> setQuickView(true)} className="border hover:bg-emerald-500 border-gray-400 p-1 rounded-full bg-white">
                            <EyeIcon className="w-5 h-5 text-gray-400 hover:text-white" />
                        </button>
                        <button className="border hover:bg-emerald-500 border-gray-400 p-1 rounded-full bg-white">
                            <ShoppingBagIcon className="w-5 h-5 text-gray-400 hover:text-white" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="px-2">
                <Link href={route('single.product', product.slug ?? 'abc')} className="text-lg font-semibold text-gray-500">
                    <h3>{product.title}</h3>
                </Link>
                <div className="space-x-3">
                    <span className="text-gray-400 text-xs line-through">${product.price} </span>
                    <span className="text-gray-800 font-xs">${product.price}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
