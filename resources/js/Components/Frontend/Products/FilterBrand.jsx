import React from 'react'
import { Link, router, useForm, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const FilterBrand = () => {
    const params = route().params;
    const{brands} = usePage().props;


    const checkboxHandaller = (e) => {
        const isCheck = e.target.checked;
        if (isCheck) {
            return router.get(route(route().current(), params),
                {
                    brand: [e.target.value]
                },
                {
                    preserveState: true,
                    replace: true
                }
            )
        }
        if (!isCheck) {

            let indexNumber = params.brand.indexOf(e.target.value)
            if (indexNumber > -1) { // Check if the item exists in the array
                params.brand.splice(indexNumber, 1); // Remove the item at the specified index
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
                <span className="text-lg font-bold">Brand</span>
            </div>

            <div className="px-3 py-2 space-y-2">
                {brands.map((brand, index) => {
                    return <div key={index} className="flex">
                        <input name="brand[]" value={brand.id} type="checkbox" id={`brandCheckbox${index}`} onChange={checkboxHandaller} defaultChecked={params.brand && params.brand.includes(brand.id.toString())}  className="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                        <label htmlFor={`brandCheckbox${index}`} className="text-sm text-gray-500 ml-3 dark:text-gray-400 font-bold capitalize">{brand.name}</label>
                    </div>
                })}
            </div>
        </div>
    )
}

export default FilterBrand
