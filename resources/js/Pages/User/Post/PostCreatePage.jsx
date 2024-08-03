import Input from '@/Components/Form/Input';
import InputLabel from '@/Components/Form/InputLabel';
import SubmitButton from '@/Components/Form/SubmitButton';
import UserSidebarComponent from '@/Components/User/UserSidebarComponent';
import AppLayout from '@/Layouts/AppLayout';
import { HomeIcon, ListBulletIcon, MapPinIcon, PlusIcon, UserIcon } from '@heroicons/react/24/outline';
import { Head, Link, router, useForm } from '@inertiajs/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Select from 'react-select'
import AsyncSelect from 'react-select/async';

export default function PostCreatePage() {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        description: '',
        address: '',
        price: '',
        thumbnail: null,
        division_id: 3,
        district_id: '',
        status: 1,
    });

    const divisionslOadOptions = async (inputText, callBack) => {
        const res = await axios.get(route('data.divisions', { keyword: inputText}));
        const data = await res.data;
        return data;
    };
    const loadOptions = async (inputText, callBack) => {
        const res = await axios.get(route('data.districts', { keyword: inputText,division_id:3}));
        const data = await res.data;
        return data;
    };

    function submit(e) {
        e.preventDefault()
        // post(route('user.post.store'));
        console.log(data);

    }
    return (
        <AppLayout>
            <Head title="Post Create" />

            <div className="bg-white dark:bg-gray-800 py-2 px-2 my-3 border border-gray-200 dark:border-gray-700 rounded-md">
                <Link href={route('user.dashboard')} className="inline-flex items-center space-x-2">
                    <HomeIcon className="w-5 h-5" />
                    <span>My Dashboard</span>
                </Link>
            </div>
            <form onSubmit={submit}>
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-12 md:col-span-9">
                        <div className="flex flex-col bg-white border shadow-sm rounded-md dark:bg-gray-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                            <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-neutral-700">
                                <p className="text-sm text-gray-500 dark:text-neutral-500">
                                    Category Create
                                </p>
                            </div>
                            <div className="py-3">
                                <div className="px-4 py-4 mx-auto">

                                    <div>
                                        <InputLabel isRequired={true} labelFor="title" />
                                        <Input id="title" type="text" name="title" value={data.title} placeholder="Post Title" onChange={(e) => setData('title', e.target.value)} />
                                        <p className="text-sm text-red-600 mt-2">{errors.title}</p>
                                    </div>

                                    <div>
                                        <InputLabel isRequired={true} labelFor="Description" />
                                        <textarea name="description" onChange={(e) => setData('description', e.target.value)} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" rows="5" placeholder="This is a textarea placeholder"></textarea>
                                        <p className="text-sm text-red-600 mt-2">{errors.description}</p>
                                    </div>

                                    <div>
                                        <InputLabel isRequired={true} labelFor="address" />
                                        <Input id="address" type="text" name="address" value={data.address} placeholder="Address" onChange={(e) => setData('address', e.target.value)} />
                                        <p className="text-sm text-red-600 mt-2">{errors.address}</p>
                                    </div>



                                    <div>
                                        <InputLabel isRequired={true} labelFor="status" />
                                        <select id="status" name="status" className="py-2 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                            onChange={(e) => setData('status', e.target.value)}>
                                            <option value="1">Yes</option>
                                            <option value="0">No</option>
                                        </select>
                                        <p className="text-sm text-red-600 mt-2">{errors.status}</p>
                                    </div>


                                    <SubmitButton />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 py-3 space-y-2">
                        <div className="flex flex-col bg-white border shadow-sm rounded-md dark:bg-gray-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                            <div className="bg-gray-100 border-b rounded-t-xl py-2 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-neutral-700">
                                <p className="text-sm text-gray-500 dark:text-neutral-500">
                                    Insert Thumbnail
                                </p>
                            </div>
                            <div className='p-4'>
                                <InputLabel isRequired={true} labelFor="thumbnail" />
                                <input id="thumbnail" type="file" name="thumbnail" placeholder="thumbnail" onChange={(e) => setData('thumbnail', e.target.files[0])} />
                                <p className="text-sm text-red-600 mt-2">{errors.thumbnail}</p>
                            </div>
                        </div>
                        <div className="flex flex-col bg-white border shadow-sm rounded-md dark:bg-gray-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                            <div className="bg-gray-100 border-b rounded-t-xl py-2 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-neutral-700">
                                <p className="text-sm text-gray-500 dark:text-neutral-500">
                                    Information
                                </p>
                            </div>
                            <div className='p-4'>
                                <div>
                                    <InputLabel isRequired={true} labelFor="Price" />
                                    <Input id="price" type="number" name="price" value={data.price} placeholder="Price" onChange={(e) => setData('price', e.target.value)} />
                                    <p className="text-sm text-red-600 mt-2">{errors.price}</p>
                                </div>
                            </div>
                            <div className='p-4'>
                                <div>
                                    <InputLabel isRequired={true} labelFor="Division" />
                                    <AsyncSelect
                                        onChange={(e) => setData('division_id', e.id)}
                                        cacheOptions
                                        loadOptions={divisionslOadOptions}
                                        getOptionLabel={option => option.name}
                                        getOptionValue={option => option.id}
                                    />
                                </div>
                                <div>
                                    <InputLabel isRequired={true} labelFor="District" />
                                    <AsyncSelect
                                        onChange={(e) => setData('district_id', e.id)}
                                        cacheOptions
                                        loadOptions={loadOptions}
                                        getOptionLabel={option => option.name}
                                        getOptionValue={option => option.id}
                                    />
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </form>
        </AppLayout>
    );
}
