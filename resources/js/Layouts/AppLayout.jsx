import Header from './Header';
import Footer from './Footer';
import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react'
import { Link, router, usePage } from '@inertiajs/react';
import Switcher from '@/Components/Common/Switcher';
import { Bars3CenterLeftIcon, CheckIcon, HeartIcon, MagnifyingGlassIcon, MicrophoneIcon, ShoppingBagIcon, UserIcon } from '@heroicons/react/24/outline';
import MenuLayout from './MenuLayout';
import { FooterLayout } from './FooterLayout';
import { useEffect } from 'react';

export default function AppLayout({ children }) {
    const { auth, categories } = usePage().props;
    const params = route().params;



    const checkboxHandaller = (e) => {

        if (params.cat) {
            return router.get(route('productpage', delete params.cat), {
                "cat[]": e.id
            },
                {
                    preserveState: true,
                    replace: true
                }
            )
        } else {
            return router.get(route('productpage', params), {
                "cat[]": e.id
            },
                {
                    preserveState: true,
                    replace: true
                }
            )
        }


    }



    const [selected, setSelected] = useState(categories[0])

    return (
        <>
            <section className="bg-emerald-500 dark:bg-slate-900 px-3 lg:px-0">
                <div className="container mx-auto flex justify-between">
                    <div className="hidden lg:flex items-center space-x-5">
                        <Link href="#" className="text-white dark:text-gray-400">About Us</Link>
                        <Link href="#" className="text-white dark:text-gray-400">Store Location</Link>
                        <Link href="#" className="text-white dark:text-gray-400">Help Center</Link>
                    </div>
                    <div className="flex items-center space-x-5">
                        <Link href="#" className="text-xs lg:text-lg text-white dark:text-gray-400">You can contact us 24/7 01921 - 579283</Link>
                    </div>
                    <div className="flex items-center space-x-5">
                        <div className="mt-2 bg-emerald-500">
                            <select name="lan" className=" bg-emerald-500 text-white dark:text-gray-400 border-none focus:ring-0 ">
                                <option className="">English</option>
                                <option className="">বাংলা</option>
                            </select>
                        </div>
                        <Switcher />
                    </div>
                </div>
            </section>
            <section className=" dark:bg-slate-900 bg-[#EEF6FF] lg:px-0 sticky top-0 z-50">
                <div className="hidden container mx-auto lg:grid grid-cols-12 py-4">
                    <div className="col-span-2">
                        <Link href={route('homepage')}>
                            <img src="/img/log-full.png" alt="" />
                        </Link>
                    </div>
                    <div className="col-span-8 flex items-center  rounded-full border border-emerald-500">
                        <div className="flex items-center text-emerald-500 border-r border-r-emerald-500">
                            <Listbox value={selected} onChange={checkboxHandaller} className="z-20">
                                <div className="relative">
                                    <Listbox.Button className="relative w-full flex items-center space-x-3 cursor-default rounded-l-full  bg-white py-3 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                        <Bars3CenterLeftIcon className="w-6 h-6" />
                                        <span className="block capitalize truncate">{selected.name}</span>
                                    </Listbox.Button>
                                    <Transition
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                            {categories.map((person, personIdx) => (
                                                <Listbox.Option
                                                    key={personIdx}
                                                    className={({ active }) =>
                                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                        }`
                                                    }
                                                    value={person}
                                                >
                                                    {({ selected }) => (
                                                        <>
                                                            <span
                                                                className={`block truncate capitalize ${selected ? 'font-medium' : 'font-normal'
                                                                    }`}
                                                            >
                                                                {person.name}
                                                            </span>
                                                            {selected ? (
                                                                <span className="absolute  inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                </span>
                                                            ) : null}
                                                        </>
                                                    )}
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </Listbox>
                        </div>
                        <div className="flex grow items-center">
                            <div className="grow">
                                <input type="text"
                                    defaultValue={params.search && params.search}
                                    onChange={(e) => {
                                        return router.get(route('productpage', params),
                                            {
                                                search: e.target.value
                                            },
                                            {
                                                preserveState: true,
                                                replace: true
                                            }
                                        )
                                    }}

                                    className="w-full text-gray-800 border-none py-3 focus:ring-0" />
                            </div>
                            <div className="flex">
                                <span className="px-3 bg-white py-3"><MicrophoneIcon className="w-6 h-6 text-emerald-500" /></span>
                                <button className="px-4 py-3 text-white bg-emerald-500 rounded-r-full">Search</button>
                            </div>
                        </div>

                    </div>
                    <div className="col-span-2 flex justify-end items-center lg:space-x-3 xl:space-x-6">

                        {/* <button className="flex flex-col items-center">
                            <span><ShoppingBagIcon className="w-6 h-6 text-gray-600" /></span>
                            <span className="text-sm font-semibold text-gray-600">Cart</span>
                        </button> */}
                        <Link href={route('cartpage')} className="relative inline-flex justify-center items-center text-sm font-semibold rounded-lg   text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
                            <div className="flex flex-col items-center">
                                <ShoppingBagIcon className="w-8 h-6 text-gray-600" />
                                <span className="text-sm font-semibold text-gray-600">Cart</span>
                            </div>
                            <span className="absolute top-0 end-0 inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium transform -translate-y-1/2 translate-x-1/2 bg-emerald-500 text-white">9</span>
                        </Link>
                        <button className="flex flex-col items-center">
                            <span><HeartIcon className="w-6 h-6 text-gray-600" /></span>
                            <span className="text-sm font-semibold text-gray-600">Wishlist</span>
                        </button>
                        {
                            auth ?
                                <Link href={route('user.dashboard')} className="flex flex-col items-center">
                                    <span><UserIcon className="w-6 h-6 text-gray-600" /></span>
                                    <span className="text-sm font-semibold text-gray-600">Account</span>
                                </Link> :
                                <button className="flex flex-col items-center">
                                    <span><UserIcon className="w-6 h-6 text-gray-600" /></span>
                                    <span className="text-sm font-semibold text-gray-600">Login</span>
                                </button>
                        }

                    </div>
                </div>
            </section>
            {/* Mobile Serarch section */}
            <section className="sticky top-0 bg-white z-10 lg:px-0">
                <div className="lg:hidden flex grow items-center px-2 py-2 ">
                    <div className="grow">
                        <input type="text"
                            className="w-full rounded-l-full border-emerald-500 border-r-0 py-2 focus:ring-0" />
                    </div>
                    <div className="flex">
                        <span className="px-2 bg-white py-2 border border-l-0 border-emerald-500 "><MicrophoneIcon className="w-6 h-6 text-emerald-500 " /></span>
                        <button className="px-4 py-2 text-white bg-emerald-500 rounded-r-full"><MagnifyingGlassIcon className="h-4 w-4" /></button>
                    </div>
                </div>
            </section>
            <MenuLayout />
            {children}
            <FooterLayout />
        </>
    );
}
