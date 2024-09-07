import AppLayout from '@/Layouts/AppLayout';
import { Head } from '@inertiajs/react';
import HeroSection from '@/Components/Homepage/HeroSection';
import ServiceSection from '@/Components/Homepage/ServiceSection';
import FeatureStatus from '@/Components/Homepage/FeatureStatus';
import Feature from '@/Components/Homepage/Feature';
import Testimonial from '@/Components/Homepage/Testimonial';
import SliderComponent from '@/Components/Homepage/SliderComponent';
import CategoryComponent from '@/Components/Homepage/CategoryComponent';
import ProductItem from '@/Components/Product/ProductItem';
import ProductTab from '@/Components/Product/ProductTab';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import ViewModal from '@/Components/Frontend/ViewModal';

export default function Homepage({ categories ,sliders,products}) {

    return (
        <AppLayout>
            <Head title="Home" />
            {/* <ViewModal /> */}
            <SliderComponent  sliders={sliders}/>
            <CategoryComponent categories={categories} />
            <section className="px-3 lg:px-0">
                <div className="container mx-auto py-5">
                    <div className="grid grid-cols-12 gap-5">
                        {
                            products.map((item, index) => {
                                return <ProductItem key={index} product={item} />
                            })
                        }

                    </div>
                </div>
            </section>
            <section >
                <img src="./img/banner1.png" className="w-full" alt="" />
            </section>
            <ProductTab />
            <section className="px-3 lg:px-0">
                <div className="container mx-auto py-5">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-4 bg-pink-300 rounded-md p-5 space-y-5">
                            <div className="py-2 space-y-1">
                                <p>Smart Offer</p>
                                <p>Save 20% on Women Bag</p>
                            </div>
                            <button className="px-2 py-1 text-white rounded-md bg-emerald-500">Shop Now</button>
                        </div>
                        <div className="col-span-4 bg-orange-300 rounded-md p-5 space-y-5">
                            <div className="py-2 space-y-1">
                                <p>Smart Offer</p>
                                <p>Save 20% on Women Bag</p>
                            </div>
                            <button className="px-2 py-1 text-white rounded-md bg-emerald-500">Shop Now</button>
                        </div>
                        <div className="col-span-4 bg-yellow-300 rounded-md p-5 space-y-5">
                            <div className="py-2 space-y-1">
                                <p>Smart Offer</p>
                                <p>Save 20% on Women Bag</p>
                            </div>
                            <button className="px-2 py-1 text-white rounded-md bg-emerald-500">Shop Now</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-3 lg:px-0">
                <div className="container mx-auto py-5">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-4 lg:col-span-2 flex flex-col items-center">
                            <div className="w-20 lg:w-40 h-20 lg:h-40 bg-gray-200 flex items-center justify-center rounded-full">
                                <UserCircleIcon className="w-10 lg:w-28 h-10 lg:h-28 text-gray-400" />
                            </div>
                            <p className="py-2 text-sm lg:text-lg font-bold text-gray-500 text-center">24/7 Customer Suport</p>
                        </div>
                        <div className="col-span-4 lg:col-span-2 flex flex-col items-center">
                            <div className="w-20 lg:w-40 h-20 lg:h-40 bg-gray-200 flex items-center justify-center rounded-full">
                                <UserCircleIcon className="w-10 lg:w-28 h-10 lg:h-28 text-gray-400" />
                            </div>
                            <p className="py-2 text-sm lg:text-lg font-bold text-gray-500 text-center">24/7 Customer Suport</p>
                        </div>
                        <div className="col-span-4 lg:col-span-2 flex flex-col items-center">
                            <div className="w-20 lg:w-40 h-20 lg:h-40 bg-gray-200 flex items-center justify-center rounded-full">
                                <UserCircleIcon className="w-10 lg:w-28 h-10 lg:h-28 text-gray-400" />
                            </div>
                            <p className="py-2 text-sm lg:text-lg font-bold text-gray-500 text-center">24/7 Customer Suport</p>
                        </div>
                        <div className="col-span-4 lg:col-span-2 flex flex-col items-center">
                            <div className="w-20 lg:w-40 h-20 lg:h-40 bg-gray-200 flex items-center justify-center rounded-full">
                                <UserCircleIcon className="w-10 lg:w-28 h-10 lg:h-28 text-gray-400" />
                            </div>
                            <p className="py-2 text-sm lg:text-lg font-bold text-gray-500 text-center">24/7 Customer Suport</p>
                        </div>
                        <div className="col-span-4 lg:col-span-2 flex flex-col items-center">
                            <div className="w-20 lg:w-40 h-20 lg:h-40 bg-gray-200 flex items-center justify-center rounded-full">
                                <UserCircleIcon className="w-10 lg:w-28 h-10 lg:h-28 text-gray-400" />
                            </div>
                            <p className="py-2 text-sm lg:text-lg font-bold text-gray-500 text-center">24/7 Customer Suport</p>
                        </div>
                        <div className="col-span-4 lg:col-span-2 flex flex-col items-center">
                            <div className="w-20 lg:w-40 h-20 lg:h-40 bg-gray-200 flex items-center justify-center rounded-full">
                                <UserCircleIcon className="w-10 lg:w-28 h-10 lg:h-28 text-gray-400" />
                            </div>
                            <p className="py-2 text-sm lg:text-lg font-bold text-gray-500 text-center">24/7 Customer Suport</p>
                        </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}
