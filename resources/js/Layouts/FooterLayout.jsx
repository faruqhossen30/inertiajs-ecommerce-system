import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, HomeIcon, HomeModernIcon, UserCircleIcon, UserIcon, UsersIcon } from "@heroicons/react/24/outline";
import { Link } from "@inertiajs/react";
import { Fragment } from "react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export function FooterLayout() {
    return (
        <>
            <footer className="container mx-auto mt-auto py-10">

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
                    <div className="col-span-full hidden lg:col-span-1 lg:block">
                        <a className="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand">Brand</a>
                        <p className="mt-3 text-xs sm:text-sm text-gray-600 dark:text-neutral-400">© 2024 Preline.</p>
                    </div>


                    <div>
                        <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">Product</h4>

                        <div className="mt-3 grid space-y-3 text-sm">
                            <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Pricing</a></p>
                            <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Changelog</a></p>
                            <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Docs</a></p>
                            <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Download</a></p>
                        </div>
                    </div>


                    <div>
                        <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">Company</h4>

                        <div className="mt-3 grid space-y-3 text-sm">
                            <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">About us</a></p>
                            <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Blog</a></p>
                            <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Careers</a> <span className="inline text-blue-600 dark:text-blue-500">— We're hiring</span></p>
                            <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Customers</a></p>
                            <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Newsroom</a></p>
                            <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Sitemap</a></p>
                        </div>
                    </div>


                    <div>
                        <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">Resources</h4>

                        <div className="mt-3 grid space-y-3 text-sm">
                            <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Community</a></p>
                            <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Help & Support</a></p>
                            <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">eBook</a></p>
                            <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">What's New</a></p>
                            <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Status</a></p>
                        </div>
                    </div>


                    <div>
                        <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">Developers</h4>

                        <div className="mt-3 grid space-y-3 text-sm">
                            <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Api</a></p>
                            <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Status</a></p>
                            <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">GitHub</a> <span className="inline text-blue-600 dark:text-blue-500">— New</span></p>
                        </div>

                        <h4 className="mt-7 text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">Industries</h4>

                        <div className="mt-3 grid space-y-3 text-sm">
                            <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Financial Services</a></p>
                            <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Education</a></p>
                        </div>
                    </div>

                </div>

                <div className="pt-5 mt-5 border-t border-gray-200 dark:border-neutral-700">
                    <div className="sm:flex sm:justify-between sm:items-center">

                        <div className="mt-2">
                            <select name="lan" className="bg-transparent text-gray-500 dark:text-gray-400 border-none focus:ring-0 ">
                                <option className="bg-transparent">English</option>
                                <option className="bg-transparent">বাংলা</option>
                            </select>
                        </div>


                        <div className="space-x-4 text-sm ms-4">
                            <a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Terms</a>
                            <a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Privacy</a>
                            <a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Status</a>
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="mt-3 sm:hidden">
                            <a className="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand">Brand</a>
                            <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-neutral-400">© 2024 Preline.</p>
                        </div>

                        <div className="space-x-4">
                            <a className="inline-block text-gray-500 hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200" href="#">
                                <HomeIcon className="h-4 w-4" />
                            </a>
                            <a className="inline-block text-gray-500 hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200" href="#">
                                <HomeIcon className="h-4 w-4" />
                            </a>
                            <a className="inline-block text-gray-500 hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200" href="#">
                                <HomeIcon className="h-4 w-4" />
                            </a>
                        </div>

                    </div>

                </div>

            </footer >


            <footer className='md:hidden grid grid-cols-5 border-t border-gray-200 dark:border-gray-600 text-sm text-white dark:text-gray-200 white bg-white dark:bg-gray-700 inset-x-0 bottom-0 fixed'>
                <Link to='/' className='col-span-1 flex flex-col items-center justify-center'>
                    <HomeIcon className="h-5 hover:bg-gray-200 hover:dark:bg-gray-50 text-gray-500 dark:text-gray-400" />
                    <span className="text-gray-800 dark:text-gray-400">Home</span>
                </Link>
                <Link to='/profile' className='col-span-1 flex flex-col items-center justify-center'>
                    <HomeIcon className="h-5 hover:bg-gray-200 hover:dark:bg-gray-50 text-gray-500 dark:text-gray-400" />
                    <span className="text-gray-800 dark:text-gray-400">Wallet</span>
                </Link>
                <Link to='/deposit' className='col-span-1 flex flex-col items-center justify-center'>
                    <HomeIcon className="h-5 hover:bg-gray-200 hover:dark:bg-gray-50 text-gray-500 dark:text-gray-400" />
                    <span className="text-gray-800 dark:text-gray-400">Deposite</span>
                </Link>
                <Link to='/statement' className='col-span-1 flex flex-col items-center justify-center'>
                    <HomeIcon className="h-5 hover:bg-gray-200 hover:dark:bg-gray-50 text-gray-500 dark:text-gray-400" />
                    <span className="text-gray-800 dark:text-gray-400">Statement</span>
                </Link>

                <div className="">
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button className="flex flex-col items-center w-full justify-center rounded-md  px-4 py-2 text-sm font-medium text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                                <UserCircleIcon className="h-5 hover:bg-gray-200 hover:dark:bg-gray-50 text-gray-500 dark:text-gray-400" />
                                <span className="text-gray-800 dark:text-gray-400">Account</span>
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute bottom-full   divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                                <div className="flex flex-col w-full divide-y divide-gray-100">
                                    <Menu.Item>
                                        <Link href="#" className="text-gray-800 dark:text-gray-400 min-w-full px-4 py-2">Login</Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link href="#" className="text-gray-800 dark:text-gray-400 min-w-full px-4 py-2">Register</Link>
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </footer>

        </>

    );
}
