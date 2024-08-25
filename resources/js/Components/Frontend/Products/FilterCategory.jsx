import React from 'react'
import { Link, router, useForm, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const FilterCategory = () => {
    const params = route().params;
    const{categories} = usePage().props;


    const checkboxHandaller = (e) => {
        const isCheck = e.target.checked;
        if (isCheck) {
            return router.get(route(route().current(), params),
                {
                    cat: [e.target.value]
                },
                {
                    preserveState: true,
                    replace: true
                }
            )
        }
        if (!isCheck) {

            let indexNumber = params.cat.indexOf(e.target.value)
            if (indexNumber > -1) { // Check if the item exists in the array
                params.cat.splice(indexNumber, 1); // Remove the item at the specified index
            }

            return router.get(route(route().current(), params), {},
                {
                    preserveState: true,
                    replace: true
                }
            )

        }
    }


    return (
        <div className="dark:bg-gray-800 mb-4 rounded-md space-y-2 border">
            <div className="px-3 py-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-800 dark:text-gray-400 border-b w-full">
                <span className="text-lg font-bold">Category</span>
            </div>

            <div className="px-3 py-2 space-y-2">
                {categories.map((category, index) => {
                    return <div key={index} className="flex">
                        <input name="cat[]" value={category.id} type="checkbox" id={`checkbox${index}`} onChange={checkboxHandaller} defaultChecked={params.cat && params.cat.includes(category.id.toString())}  className="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                        <label htmlFor={`checkbox${index}`} className="text-sm text-gray-500 ml-3 dark:text-gray-400 font-bold capitalize">{category.name}</label>
                    </div>
                })}
            </div>
        </div>
    )
}

export default FilterCategory
