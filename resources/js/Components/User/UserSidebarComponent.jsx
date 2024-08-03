import { HomeIcon, ListBulletIcon, PlusIcon, UserIcon } from '@heroicons/react/24/outline'
import { Link } from '@inertiajs/react'
import React from 'react'

function UserSidebarComponent() {
    return (
        <ul className="flex flex-col divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800 mb-4 rounded-md border dark:border-gray-700">
            <li className="inline-flex items-center gap-x-2 py-2 px-4 text-sm font-medium text-gray-800 dark:text-gray-400">
                <span className="text-lg font-bold">Menu</span>
            </li>

            <li className="inline-flex items-center text-sm font-medium text-gray-800 dark:text-gray-400">
                <Link href={route('user.dashboard')} className="flex space-x-2 py-2 px-3 hover:bg-gray-300 dark:hover:bg-slate-900 w-full">
                    <HomeIcon className="w-4 h-4" />
                    <span>Dashboard</span>
                </Link>
            </li>
            <li className="inline-flex items-center text-sm font-medium text-gray-800 dark:text-gray-400">
                <Link href={route('user.profile')} className="flex space-x-2 py-2 px-3 hover:bg-gray-300 dark:hover:bg-slate-900 w-full">
                    <UserIcon className="w-4 h-4" />
                    <span>Profile</span>
                </Link>
            </li>
            <li className="inline-flex items-center text-sm font-medium text-gray-800 dark:text-gray-400">
                <Link href={route('user.post.create')} className="flex space-x-2 py-2 px-3 hover:bg-gray-300 dark:hover:bg-slate-900 w-full">
                    <PlusIcon className="w-4 h-4" />
                    <span>Add Post</span>
                </Link>
            </li>
            <li className="inline-flex items-center text-sm font-medium text-gray-800 dark:text-gray-400">
                <Link href="#" className="flex space-x-2 py-2 px-3 hover:bg-gray-300 dark:hover:bg-slate-900 w-full">
                    <ListBulletIcon className="w-4 h-4" />
                    <span>My Post</span>
                </Link>
            </li>
        </ul>
    )
}

export default UserSidebarComponent
