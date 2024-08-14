
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useForm } from '@inertiajs/react';
import Input from '@/Components/Form/Input';
import SubmitButton from '@/Components/Form/SubmitButton';
import InputLabel from '@/Components/Form/InputLabel';
import BreadcumComponent from '@/Components/Dashboard/BreadcumComponent';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


export default function Create({ auth, product, categories }) {
    const { data, setData, put, post, processing, errors, reset } = useForm({
        title: product.title,
        description: product.description,
        category_id: product.category_id,
        brand_id: product.brand_id,
        price: product.price,
        quantity: product.quantity,
        alert_quantity: product.alert_quantity,
        discount_type: product.discount_type,
        discount: product.discount,
        meta_title: product.meta_title,
        meta_description: product.meta_description,
        meta_keyword: product.meta_keyword,
        slider: null,
        sku_code: product.sku_code,
        thumbnail: null,
        status: product.status,
    });
    function submit(e) {
        e.preventDefault()
        console.log(data);
        post(route('product.update', product.id));
    }

    return (
        <AuthenticatedLayout>
            <BreadcumComponent pageOne="Product" pageOneRoute="product.index" />

            <form onSubmit={submit}>
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-8">
                        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                            <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-neutral-700">
                                <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                                    Category Create
                                </p>
                            </div>
                            <div className="p-4 md:p-5">
                                <div className=" px-2 py-2 sm:px-6 lg:px-4 mx-auto">
                                    <div>
                                        <InputLabel isRequired={true} labelFor="title" />
                                        <Input id="title" type="text" name="title" value={data.title} autoComplete="title" placeholder="title" onChange={(e) => setData('title', e.target.value)} />
                                        <p className="text-sm text-red-600 mt-2">{errors.title}</p>
                                    </div>
                                    <div>
                                        <InputLabel isRequired={true} labelFor="Description" />
                                        <RichTextEditor setData={setData} data={data} name="description" />
                                    </div>


                                    <div className="mt-20">
                                        <label for="hs-about-contacts-1" className="sr-only">Short Details</label>
                                        <textarea id="hs-about-contacts-1" name="short_description" rows="4" onChange={(e) => setData('short_description', e.target.value)} className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Short Details"></textarea>
                                    </div>

                                    <div>
                                        <InputLabel isRequired={true} labelFor="category" />
                                        {/* <select name='category_id' value={data.category_id} id='category' className="py-2 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" onChange={(e) => setData('category_id', e.target.value)} >
                                            <option value="">Select Category</option>
                                            {
                                                categories.map((cat, index) => {
                                                    return <option value={cat.id} key={index}>{cat.name}</option>
                                                })
                                            }
                                        </select> */}
                                        <p className="text-sm text-red-600 mt-2">{errors.status}</p>
                                    </div>

                                    {/* <div>
                                        <InputLabel isRequired={true} labelFor="Subcategory" />
                                        <select id='Subcategory' name='subcategory_id' value={data.subcategory_id} className="py-2 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" onChange={(e) => setData('subcategory_id', e.target.value)} >

                                            <option value="">Select subcategory</option>
                                            {
                                                subcategories.map((subcategory, index) => {
                                                    return <option value={subcategory.id} key={index}>{subcategory.name}</option>
                                                })
                                            }
                                        </select>
                                        <p className="text-sm text-red-600 mt-2">{errors.status}</p>
                                    </div> */}

                                    {/* <div>
                                        <InputLabel isRequired={true} labelFor="Brand" />
                                        <select id='Brand' name='brand_id' value={data.brand_id} className="py-2 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" onChange={(e) => setData('brand_id', e.target.value)} >
                                            <option value="">Select brand</option>
                                            {
                                                brands.map((brand, index) => {
                                                    return <option value={brand.id} key={index}>{brand.name}</option>
                                                })
                                            }
                                        </select>
                                        <p className="text-sm text-red-600 mt-2">{errors.status}</p>
                                    </div> */}
                                    <SubmitButton />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4">
                        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                            <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-neutral-700">
                                <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                                    Category Create
                                </p>
                            </div>
                            <div className="px-2 py-2 sm:px-6 lg:px-4 mx-auto w-full">
                                <div>
                                    <InputLabel isRequired={true} labelFor="thumbnail" />
                                    <input id="thumbnail" type="file" name="thumbnail" placeholder="thumbnail" onChange={(e) => setData('thumbnail', e.target.files[0])} />
                                    <p className="text-sm text-red-600 mt-2">{errors.thumbnail}</p>
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

                            </div>
                        </div>
                    </div>
                </div>
            </form>




        </AuthenticatedLayout>
    );
}
