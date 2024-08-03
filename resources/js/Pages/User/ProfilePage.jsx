import UserSidebarComponent from '@/Components/User/UserSidebarComponent';
import AppLayout from '@/Layouts/AppLayout';
import { HomeIcon, ListBulletIcon, MapPinIcon, PlusIcon, UserIcon } from '@heroicons/react/24/outline';
import { Head, Link } from '@inertiajs/react';

export default function ProfilePage() {
    return (
        <AppLayout>
            <Head title="Dashboard" />

            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-3 py-3 hidden md:block">
                    <UserSidebarComponent />
                </div>
                <div className="col-span-12 md:col-span-9 ">
                    <div className="bg-white dark:bg-gray-800 py-2 px-2 my-3 border border-gray-200 dark:border-gray-700 rounded-md">
                        <span className="text-gray-600 dark:text-gray-400 text-lg font-bold">My Profile</span>
                    </div>

                    <div className="col-span-12 lg:col-span-4">
                        <div className="border rounded  dark:border-neutral-600 shadow-md">
                            <div className="p-5 border-b border-gray-100/50 dark:border-neutral-600">
                                <div className="text-center">
                                    <img src="assets/images/profile.jpg" alt="" className="w-20 h-20 p-1 mx-auto border-2 rounded-full border-gray-200/20" />
                                    <h6 className="mt-4 mb-0 text-lg text-gray-800 dark:text-gray-400">Jansh Dickens</h6>
                                    <p className="mb-4 text-gray-500 dark:text-gray-300">Developer</p>
                                    <ul className="flex flex-wrap justify-center gap-2 mb-0">
                                        <li className="w-10 h-10 text-lg leading-10 transition-all duration-300 ease-in-out rounded bg-violet-500/20 text-violet-500 hover:bg-violet-500 hover:text-white">
                                            <a href="#" className="social-link rounded-3 "><i className="uil uil-facebook-f"></i></a>
                                        </li>
                                        <li className="w-10 h-10 text-lg leading-10 transition-all duration-300 ease-in-out rounded bg-sky-500/20 text-sky-500 hover:bg-sky-500 hover:text-white">
                                            <a href="#" className="social-link rounded-3 btn-soft-info"><i className="uil uil-twitter-alt"></i></a>
                                        </li>
                                        <li className="w-10 h-10 text-lg leading-10 text-green-500 transition-all duration-300 ease-in-out rounded bg-green-500/20 hover:bg-green-500 hover:text-white">
                                            <a href="#" className="social-link rounded-3 btn-soft-success"><i className="uil uil-whatsapp"></i></a>
                                        </li>
                                        <li className="w-10 h-10 text-lg leading-10 text-red-500 transition-all duration-300 ease-in-out rounded bg-red-500/20 hover:bg-red-500 hover:text-white">
                                            <a href="#" className="social-link rounded-3 btn-soft-danger"><i className="uil uil-phone-alt"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="p-5">
                                <div className="pb-5 border-b border-gray-100/50 dark:border-neutral-600">
                                    <h6 className="mb-5 font-semibold text-gray-800 text-17 dark:text-gray-400">Documents</h6>
                                    <ul className="">
                                        <li>
                                            <div className="flex items-center mt-4 ">
                                                <div className="text-2xl text-gray-500 shrink-0">
                                                    <i className="uil uil-file"></i>
                                                </div>
                                                <div className="ml-4">
                                                    <h6 className="mb-0 text-gray-800 text-16 dark:text-gray-400">Resume.pdf</h6>
                                                    <p className="mb-0 text-gray-500 dark:text-gray-300">1.25 MB</p>
                                                </div>
                                                <div className="ml-auto text-xl">
                                                    <a href="assets/images/dark-logo.png" download="" className="text-gray-500 fs-20"><i className="uil uil-import"></i></a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-center mt-4 ">
                                                <div className="text-2xl text-gray-500 shrink-0">
                                                    <i className="uil uil-file"></i>
                                                </div>
                                                <div className="ml-4">
                                                    <h6 className="mb-0 text-gray-800 text-16 dark:text-gray-400">Cover-letter.pdf</h6>
                                                    <p className="mb-0 text-gray-500 dark:text-gray-300">1.25 MB</p>
                                                </div>
                                                <div className="ml-auto text-xl">
                                                    <a href="assets/images/dark-logo.png" download="" className="text-gray-500 fs-20"><i className="uil uil-import"></i></a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <div className="p-5 pt-0">
                                <h6 className="mb-3 font-semibold text-gray-800 text-17 dark:text-gray-400">Contacts</h6>
                                <ul className="mb-0">
                                    <li className="pb-3">
                                        <div className="flex">
                                            <label className="w-32 font-medium text-gray-800 dark:text-gray-400">Email</label>
                                            <div>
                                                <p className="mb-0 text-gray-500 text-break dark:text-gray-300">
                                                    Jansh@gmail.com
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="pb-3">
                                        <div className="flex">
                                            <label className="w-32 font-medium text-gray-800 dark:text-gray-400">Phone Number</label>
                                            <div>
                                                <p className="mb-0 text-gray-500 dark:text-gray-300">+2 345 678 0000</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="pb-3">
                                        <div className="flex">
                                            <label className="w-32 font-medium text-gray-800 dark:text-gray-400">Location</label>
                                            <div>
                                                <p className="mb-0 text-gray-500 dark:text-gray-300">New Caledonia</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
