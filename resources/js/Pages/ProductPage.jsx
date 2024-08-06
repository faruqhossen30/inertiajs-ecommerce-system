import BreadcumComponent from "@/Components/Dashboard/BreadcumComponent";
import ProductItem from "@/Components/Product/ProductItem";
import AppLayout from "@/Layouts/AppLayout";
import { ListBulletIcon } from "@heroicons/react/24/outline";
import { router } from "@inertiajs/react";

export default function ProductPage({ auth, laravelVersion, phpVersion }) {
    const params = route().params;
    let products = [2, 5, 4, 5, 6, 6, 3, 4, 6, 5, 6, 9, 7, 9, 7, 8, 2];
    return (
        <AppLayout >
            <section className="container mx-auto px-3 lg:px-0">
                <BreadcumComponent pageOne="Products" pageOneRoute="productpage" />
            </section>
            <div className="container mx-auto grid grid-cols-12 gap-5 px-3 lg:px-0">
                <div className="col-span-3 hidden md:block py-1">



                    <div className="dark:bg-gray-800 mb-4 rounded-md px-4 py-2 space-y-2 border">
                        <div className="inline-flex items-center gap-x-2 py-1 text-sm font-medium text-gray-800 dark:text-gray-400 border-b w-full">
                            <span className="text-lg font-bold">Colors</span>
                        </div>

                        <div className="flex">
                            <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="colorcheckbox1" />
                            <label htmlFor="colorcheckbox1" className="text-sm text-gray-500 ml-3 dark:text-gray-400">Red</label>
                        </div>

                        <div className="flex">
                            <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="colorcheckbox2" />
                            <label htmlFor="colorcheckbox2" className="text-sm text-gray-500 ml-3 dark:text-gray-400">Green</label>
                        </div>
                        <div className="flex">
                            <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="colorcheckbox3" />
                            <label htmlFor="colorcheckbox3" className="text-sm text-gray-500 ml-3 dark:text-gray-400">Blue</label>
                        </div>
                        <div className="flex">
                            <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="colorcheckbox4" />
                            <label htmlFor="colorcheckbox4" className="text-sm text-gray-500 ml-3 dark:text-gray-400">Yellow</label>
                        </div>
                    </div>


                    <div className="dark:bg-gray-800 mb-4 rounded-md px-4 py-2 space-y-2 border">
                        <div className="inline-flex items-center gap-x-2 py-1 text-sm font-medium text-gray-800 dark:text-gray-400 border-b w-full">
                            <span className="text-lg font-bold">Delivery Days</span>
                        </div>

                        <div className="flex">
                            <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-checkbox" />
                            <label htmlFor="hs-default-checkbox" className="text-sm text-gray-500 ml-3 dark:text-gray-400">Up to 10 days</label>
                        </div>

                        <div className="flex">
                            <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-checked-checkbox" />
                            <label htmlFor="hs-checked-checkbox" className="text-sm text-gray-500 ml-3 dark:text-gray-400">Up to 20 days</label>
                        </div>
                        <div className="flex">
                            <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-checked-checkbox" />
                            <label htmlFor="hs-checked-checkbox" className="text-sm text-gray-500 ml-3 dark:text-gray-400">Up to 20 days</label>
                        </div>
                        <div className="flex">
                            <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-checked-checkbox" />
                            <label htmlFor="hs-checked-checkbox" className="text-sm text-gray-500 ml-3 dark:text-gray-400">Up to 20 days</label>
                        </div>
                    </div>

                </div>

                <div className="col-span-12 md:col-span-9">
                    <div className=" bg-white dark:bg-slate-800 flex justify-between mb-5">
                        <div className="flex items-center  space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                className="w-6 h-6 text-gray-800 dark:text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>

                            <svg className="w-4 h-4 text-gray-800 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M9.143 4H4.857A.857.857 0 0 0 4 4.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 10 9.143V4.857A.857.857 0 0 0 9.143 4Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 20 9.143V4.857A.857.857 0 0 0 19.143 4Zm-10 10H4.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286A.857.857 0 0 0 9.143 14Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z" />
                            </svg>

                        </div>

                        <div className="flex space-x-2">
                            <div className="flex items-center space-x-1">
                                <label htmlFor="" className="text-gray-800 dark:text-gray-400">Order:</label>
                                <select name="show"
                                    onChange={(e) => {
                                        return router.get(route(route().current(), params),
                                            {
                                                show: e.target.value
                                            },
                                            {
                                                preserveState: true,
                                                replace: true
                                            }
                                        )
                                    }}
                                    className="py-1 px-4 pe-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                </select>
                            </div>
                            <div className="flex items-center space-x-1">
                                <label htmlFor="" className="text-gray-800 dark:text-gray-400">Sort:</label>
                                <select name="sortby"
                                    onChange={(e) => {
                                        return router.get(route(route().current(), params),
                                            {
                                                orderby: e.target.value
                                            },
                                            {
                                                preserveState: true,
                                                replace: true
                                            }
                                        )
                                    }}
                                    className="py-1 px-4 pe-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                                    <option value="">Default</option>
                                    <option value="asc">Latest</option>
                                    <option value="desc">Older</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-3">
                        {
                            products.map((item, index) => {
                                return <ProductItem key={index} product={item} />
                            })
                        }

                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
