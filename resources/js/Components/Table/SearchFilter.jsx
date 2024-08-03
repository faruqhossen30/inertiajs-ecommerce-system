import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { router } from '@inertiajs/react';
import React from 'react'

function SearchFilter({routeName}) {
    const params = route().params;
    return (
        <div className="flex items-center justify-between px-5 py-3">
            <div class="flex items-center flex-1 max-w-sm px-3 border rounded-md">
                <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
                <input
                    onChange={(e) => {
                        return router.get(route(routeName, params),
                            {
                                search: e.target.value
                            },
                            {
                                preserveState: true,
                                replace: true
                            }
                        )
                    }}
                    type="text" name="search" class="py-2 block w-full border-gray-200 rounded-lg text-sm border-none focus:ring-0" placeholder="Search" />
            </div>

            <div class="space-y-3">
                <select name="show"
                    onChange={(e) => {
                        return router.get(route(routeName, params),
                            {
                                show: e.target.value
                            },
                            {
                                preserveState: true,
                                replace: true
                            }
                        )
                    }}

                    class="py-2 px-3 pe-9 block border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                </select>
            </div>
        </div>

    )
}

export default SearchFilter
