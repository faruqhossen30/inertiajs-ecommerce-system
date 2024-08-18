import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import axios from 'axios';

function FeatureList({ setData }) {

    const [features, setFeatures] = useState([]);
    const [categories, setCategories] = useState([]);
    const [categoryIds, setCategoryIds] = useState([]);

    useEffect(() => {
        axios.get(route('data.categories'))
            .then((res) => {
                setCategories(res.data);
            });
    }, []);


    const categoryChangeHandaller = (e) => {

        axios.get(route('data.features'),{categoryIds:"categoryIds"})
            .then((res) => {
                console.log(res);

                // setFeatures(res.data);
            });
    }

    return (
        <div>
            <div className="flex space-x-5">
                <label className="text-sm font-medium dark:text-white capitalize py-2">
                    Category
                </label>
                <Select
                    closeMenuOnSelect={false}
                    onChange={(e) => categoryChangeHandaller(e)}
                    isMulti
                    options={categories}
                    getOptionLabel={option => option.name}
                    getOptionValue={option => option.id}
                    className="w-full"
                />
            </div>
            <div className="py-5 inline-block">
                <ul className="flex flex-col">
                    {features.map((item, index) => {
                        return <ChecboxComponent item={item} index={index} key={index} />
                    })}

                </ul>
            </div>
        </div>
    )



    function ChecboxComponent({ item, index }) {
        return <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
            <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                    <input
                        id={`checkfor${index}`}
                        name="comments"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                </div>
                <div className="text-sm leading-6">
                    <label htmlFor={`checkfor${index}`} className="font-medium text-gray-900">
                        {item.name}
                    </label>
                </div>
            </div>
        </li>
    }
}

export default FeatureList
