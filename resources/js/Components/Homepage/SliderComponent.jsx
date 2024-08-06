import { ArrowLongRightIcon } from '@heroicons/react/24/outline'
import React from 'react'

function SliderComponent() {
    return (
        <section className="bg-gray-100 px-3 lg:px-0">
            <div className="container mx-auto py-2">
                <div className="grid grid-cols-12">
                    <div className="hidden lg:block lg:col-span-6">
                        <img src="./img/ban2.png" className="rounded-lg h-[500px]" alt="" />
                    </div>
                    <div className="col-span-12 lg:col-span-6 flex items-center">
                        <div className="flex flex-col  space-y-5">
                            <span className="font-bold text-gray-500">100% NATURAL FOOD</span>
                            <div className="space-y-4">
                                <p className=" text-4xl font-bold text-emerald-500">Fam Fresh Vegetalbel & </p>
                                <span className=" text-4xl font-bold text-emerald-500">Food 100% Organics</span>
                            </div>
                            <span className="font-normal text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quam fugiat mollitia nemo velit quasi labore esse repellat necessitatibus. Laborum.</span>
                            <div>
                                <button className="p-3 rounded-md bg-emerald-500 text-white flex items-center space-x-4">
                                    <span> Shop Now</span>
                                    <ArrowLongRightIcon className="w-4 h-4 " />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SliderComponent
