import { Head, useForm } from '@inertiajs/react';
import BreadcumComponent from '@/Components/Dashboard/BreadcumComponent';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputLabel from '@/Components/Form/InputLabel';
import RichTextEditor from '@/Components/RichTextEditor';
import Input from '@/Components/Form/Input';
import SubmitButton from '@/Components/Form/SubmitButton';
import Select from 'react-select'
import axios from 'axios';
import Slider from '@/Components/Slider';
import ImageFile from '@/Components/Admin/Product/ImageFile';
import { useState } from 'react';


export default function Create({ auth, categories, brands }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        description: '',
        short_description: '',
        category_id: '',
        subcategory_id: '',
        brand_id: '',
        price: '',
        quantity: '',
        alert_quantity: '',
        discount_type: '',
        discount: '',
        meta_title: '',
        meta_description: '',
        meta_keyword: '',
        thumbnail: null,
        slider: null,
        sku_code: '',
        status: 1,
    });
    function submit(e) {
        e.preventDefault()
        // post(route('product.store'));
        console.log(data);
    }

    const [subcategories, setSubcategories] = useState([]);

    const categoryChangeHandaller = async (e) => {
        setData('category_id', e.target.value);
        const res = await axios.get(route('data.subcategories', { category_id: e.target.value }));
        const data = await res.data;
        setSubcategories(data);
        console.log(subcategories);

    }


    return (
        <AuthenticatedLayout>
            <BreadcumComponent pageOne="Products" pageOneRoute="product.index" />
            <form onSubmit={submit}>
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-8 space-y-2">
                        <div
                            className="flex flex-col bg-white border shadow-sm rounded-md dark:bg-gray-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                            <div
                                className="bg-gray-100 border-b rounded-t-md py-3 px-4 md:py-3 md:px-5 dark:bg-gray-800 dark:border-neutral-700">
                                <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                                    Product Create
                                </p>
                            </div>
                            <div className="p-4 md:p-5">
                                <div>
                                    <InputLabel isRequired={true} labelFor="title" />
                                    <Input id="title" type="text" name="title" value={data.title} autoComplete="title"
                                        placeholder="title" onChange={(e) => setData('title', e.target.value)} />
                                    <p className="text-sm text-red-600 mt-2">{errors.title}</p>
                                </div>

                                <div>
                                    <InputLabel isRequired={true} labelFor="Description" />
                                    <RichTextEditor setData={setData} data={data} name="description" />
                                </div>

                                <div className="mt-20">
                                    <label htmlFor="hs-about-contacts-1" className="sr-only">Short Details</label>
                                    <textarea id="hs-about-contacts-1" name="short_description" rows="4" onChange={(e) => setData('short_description', e.target.value)} className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Short Details"></textarea>
                                </div>
                            </div>
                        </div>

                        <div className="border shadow-md dark:border-gray-700">
                            <div className="bg-gray-100 border-b py-3 md:py-4 px-4 md:px-5 dark:bg-gray-800 dark:border-neutral-700">
                                <p className="text-sm text-gray-500 dark:text-neutral-500">
                                    Select Media Photos
                                </p>
                            </div>
                            <div className="grid grid-cols-10 gap-5 p-5">
                                <div className="col-span-5 lg:col-span-2">
                                    <ImageFile name="thumbnail" setData={setData} errors={errors} placeholder="Feature Photo" />
                                </div>
                                <div className="col-span-5 lg:col-span-2">
                                    <ImageFile name="img_1" setData={setData} errors={errors} placeholder="Photo 1" />
                                </div>
                                <div className="col-span-5 lg:col-span-2">
                                    <ImageFile name="img_1" setData={setData} errors={errors} placeholder="Photo 2" />
                                </div>
                                <div className="col-span-5 lg:col-span-2">
                                    <ImageFile name="img_3" setData={setData} errors={errors} placeholder="Photo 3" />
                                </div>
                                <div className="col-span-5 lg:col-span-2">
                                    <ImageFile name="img_4" setData={setData} errors={errors} placeholder="Photo 4" />
                                </div>
                            </div>
                        </div>

                        <div
                            className="flex flex-col bg-white border shadow-sm rounded-md dark:bg-gray-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                            <div
                                className="bg-gray-100 border-b rounded-t-md py-3 px-4 md:py-3 md:px-5 dark:bg-gray-800 dark:border-neutral-700">
                                <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                                    SEO Section
                                </p>
                            </div>
                            {/* SEO Section Start */}
                            <div className="p-4 md:p-5">
                                <div>
                                    <InputLabel isRequired={true} labelFor="Meta_title" />
                                    <Input id="Meta_title" type="text" name="meta_title" value={data.meta_title} autoComplete="meta_title"
                                        placeholder="meta_title" onChange={(e) => setData('meta_title', e.target.value)} />
                                    <p className="text-sm text-red-600 mt-2">{errors.meta_title}</p>
                                </div>

                                <div className="mt-2">
                                    <label htmlFor="meta_description" className="sr-only">Meta Description</label>
                                    <textarea id="meta_description" name="meta_description" rows="4" onChange={(e) => setData('meta_description', e.target.value)} className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Meta_description" ></textarea>
                                </div>

                                <div>
                                    <InputLabel isRequired={true} labelFor="meta_keyword" />
                                    <Input id="meta_keyword" type="text" name="meta_keyword" value={data.meta_keyword} autoComplete="meta_keyword"
                                        placeholder="meta_keyword" onChange={(e) => setData('meta_keyword', e.target.value)} />
                                    <p className="text-sm text-red-600 mt-2">{errors.meta_keyword}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4">
                        <div
                            className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                            <div
                                className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-neutral-700">
                                <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                                    Category Create
                                </p>
                            </div>
                            <div className="px-2 py-2 sm:px-6 lg:px-4 mx-auto w-full">

                                <div>
                                    <InputLabel isRequired={true} labelFor="category" />
                                    <select name='category_id' onChange={(e)=>categoryChangeHandaller(e)} id='category' className="py-2 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" >
                                        <option value="">Select Category</option>
                                        {
                                            categories.map((cat, index) => {
                                                return <option value={cat.id} key={index}>{cat.name}</option>
                                            })
                                        }
                                    </select>
                                    <p className="text-sm text-red-600 mt-2">{errors.status}</p>
                                </div>

                                <div>
                                    <InputLabel isRequired={true} labelFor="Subcategory" />
                                    <select id='Subcategory' name='subcategory_id' className="py-2 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" onChange={(e) => setData('subcategory_id', e.target.value)} >

                                        <option value="">Select subcategory</option>
                                        {
                                            subcategories.map((subcategory, index) => {
                                                return <option value={subcategory.id} key={index}>{subcategory.name}</option>
                                            })
                                        }
                                    </select>
                                    <p className="text-sm text-red-600 mt-2">{errors.status}</p>
                                </div>

                                <div>
                                    <InputLabel isRequired={true} labelFor="Brand" />
                                    <select id='Brand' name='brand_id' className="py-2 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" onChange={(e) => setData('brand_id', e.target.value)} >
                                        <option value="">Select brand</option>
                                        {
                                            brands.map((brand, index) => {
                                                return <option value={brand.id} key={index}>{brand.name}</option>
                                            })
                                        }
                                    </select>
                                    <p className="text-sm text-red-600 mt-2">{errors.status}</p>
                                </div>

                                <div>
                                    <InputLabel isRequired={true} labelFor="status" />
                                    <select id="status" name="status"
                                        className="py-2 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                        onChange={(e) => setData('status', e.target.value)}>
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                    <p className="text-sm text-red-600 mt-2">{errors.status}</p>
                                </div>


                                <div>
                                    <InputLabel isRequired={true} labelFor="Price" />
                                    <Input id="Price" type="number" name="price" value={data.price} autoComplete="price"
                                        placeholder="price" onChange={(e) => setData('price', e.target.value)} />
                                    <p className="text-sm text-red-600 mt-2">{errors.price}</p>
                                </div>
                                <div>
                                    <InputLabel isRequired={true} labelFor="Qty" />
                                    <Input id="Qty" type="number" name="quantity" value={data.quantity} autoComplete="quantity"
                                        placeholder="quantity" onChange={(e) => setData('quantity', e.target.value)} />
                                    <p className="text-sm text-red-600 mt-2">{errors.quantity}</p>
                                </div>
                                <div>
                                    <InputLabel isRequired={true} labelFor="alert_quantity" />
                                    <Input id="alert_quantity" type="number" name="alert_quantity" value={data.alert_quantity} autoComplete="alert_quantity"
                                        placeholder="alert_quantity" onChange={(e) => setData('alert_quantity', e.target.value)} />
                                    <p className="text-sm text-red-600 mt-2">{errors.alert_quantity}</p>
                                </div>

                                <div>
                                    <InputLabel isRequired={true} labelFor="Discount_type" />
                                    <select id="Discount_type" name="discount_type"
                                        className="py-2 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                        onChange={(e) => setData('discount_type', e.target.value)}>
                                        <option value="percentage">percentage </option>
                                        <option value="flat">flat </option>
                                    </select>
                                    <p className="text-sm text-red-600 mt-2">{errors.discount_type}</p>
                                </div>
                                <div>
                                    <InputLabel isRequired={true} labelFor="Discount" />
                                    <Input id="Discount" type="number" name="discount" value={data.discount} autoComplete="discount"
                                        placeholder="discount" onChange={(e) => setData('discount', e.target.value)} />
                                    <p className="text-sm text-red-600 mt-2">{errors.discount}</p>
                                </div>
                                <div>
                                    <InputLabel isRequired={true} labelFor="Sku_Code" />
                                    <Input id="Sku_Code" type="number" name="sku_code" value={data.sku_code} autoComplete="sku_code"
                                        placeholder="sku_code" onChange={(e) => setData('sku_code', e.target.value)} />
                                    <p className="text-sm text-red-600 mt-2">{errors.discount}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <SubmitButton />
                </div>
            </form>
        </AuthenticatedLayout >
    );
}
