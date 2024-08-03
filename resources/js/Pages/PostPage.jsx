import CategorySidebar from '@/Components/Frontend/CategorySidebar';
import PostComponent from '@/Components/Frontend/PostComponent';
import Pagination from '@/Components/Pagination';
import AppLayout from '@/Layouts/AppLayout';
import { CodeBracketIcon, HomeIcon, MagnifyingGlassCircleIcon, MagnifyingGlassIcon, MapIcon, MapPinIcon, PencilIcon } from '@heroicons/react/24/outline';
import { Head, router } from '@inertiajs/react';
import { useState } from 'react';

export default function PostPage({ posts }) {
    const params = route().params;
    const [keyword, setKeyword] = useState('');
    console.log(posts);

    function changeHandaller(e) {
        setKeyword(e.target.value);
        // route.replace(e.target.value);
        ;
    }
    return (
        <AppLayout>
            <Head title="Posts" />
            <div className="p-1 px-5 my-3 flex items-center space-x-2 border dark:border-gray-700 rounded-md">
                <MagnifyingGlassIcon className="w-6 h-6 text-gray-400 dark:text-gray-400" />
                <input type="text"
                    onChange={(e) => {
                        return router.get(route('postpage', params),
                            {
                                search: e.target.value
                            },
                            {
                                preserveState: true,
                                replace: true
                            }
                        )
                    }}
                    className="w-full bg-white dark:bg-slate-900 border-none focus:border-none focus:ring-0 text-gray-400 rounded-md" placeholder="Search your place" />
            </div>


            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12 md:col-span-9 ">

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
                                        return router.get(route('postpage', params),
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
                                        return router.get(route('postpage', params),
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
                    <div className="grid grid-cols-12 space-y-5">
                        {posts.data.map((post, index) => {
                            return <PostComponent key={index} post={post} />
                        })}
                    </div>

                    <div className="py-10">
                        {/* <Pagination pagination={posts} links={posts.links} /> */}
                        <Pagination pagination={posts} links={posts.links} />
                    </div>
                </div>
                <div className="col-span-3 hidden md:block">
                    <div className="flex flex-col divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800 mb-4 rounded-md border dark:border-gray-700">
                        <span className="p-2 text-gray-800 dark:text-gray-400 ">
                            <span className="font-bold"><MapPinIcon className="w-6 h-6 inline" /> : </span>
                            <span>Modarmore, Jhenaidah</span>
                        </span>
                    </div>
                    <CategorySidebar />
                </div>

            </div>

        </AppLayout>
    );
}
