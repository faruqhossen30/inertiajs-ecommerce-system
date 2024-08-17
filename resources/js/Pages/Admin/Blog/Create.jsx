
import { useForm } from '@inertiajs/react';
import BreadcumComponent from '@/Components/Dashboard/BreadcumComponent';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputLabel from '@/Components/Form/InputLabel';
import Input from '@/Components/Form/Input';
import RichTextEditor from '@/Components/RichTextEditor';
import SubmitButton from '@/Components/Form/SubmitButton';


export default function Create({ auth, categories }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        description: '',
        category_id: '',
        thumbnail: '',
        meta_title: '',
        meta_description: '',
        meta_tag: '',
        status: 1,
    });

    function submit(e) {
        e.preventDefault()
        // console.log(data);
        post(route('blog.store'));
        // console.log(errors);
    }

    return (
        <AuthenticatedLayout>
            <BreadcumComponent pageOne="blogs" pageOneRoute="blog.index" />
            <form onSubmit={submit}>

                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-8">
                        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                            <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-neutral-700">
                                <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                                    Blog Create
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


                                    <div className='mt-16'>
                                        <InputLabel isRequired={true} labelFor="category" />
                                        <select name='category_id' id='category' className=" px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" onChange={(e) => setData('category_id', e.target.value)} >
                                            <option value="">Select Category</option>
                                            {
                                                categories.map((cat, index) => {
                                                    return <option value={cat.id} key={index}>{cat.name}</option>
                                                })
                                            }
                                        </select>
                                        <p className="text-sm text-red-600 mt-2">{errors.status}</p>
                                    </div>

                                </div>
                                    <SubmitButton title={'Update'} />
                            </div>
                        </div>
                    </div>
                <div className="col-span-4">
                    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                        <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-neutral-700">
                            <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                                Blog Create
                            </p>
                        </div>
                        <div className="p-4 md:p-5">
                            <div className=" px-2 py-2 sm:px-6 lg:px-4 mx-auto">

                                <div className=''>
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


                                <div>
                                    <InputLabel isRequired={true} labelFor="Meta_title" />
                                    <Input id="Meta_title" type="text" name="meta_title" value={data.meta_title} autoComplete="meta_title"
                                        placeholder="meta_title" onChange={(e) => setData('meta_title', e.target.value)} />
                                    <p className="text-sm text-red-600 mt-2">{errors.meta_title}</p>
                                </div>

                                <div className="mt-2">
                                    <label for="meta_description" className="sr-only">Meta Description</label>
                                    <textarea id="meta_description" name="meta_description" rows="4" onChange={(e) => setData('meta_description', e.target.value)} className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Meta_description" ></textarea>
                                </div>

                                <div>
                                    <InputLabel isRequired={true} labelFor="meta_tag" />
                                    <Input id="meta_tag" type="text" name="meta_tag" value={data.meta_tag} autoComplete="meta_tag"
                                        placeholder="meta_tag" onChange={(e) => setData('meta_tag', e.target.value)} />
                                    <p className="text-sm text-red-600 mt-2">{errors.meta_tag}</p>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
                </div>

            </form>
        </AuthenticatedLayout>
    );
}
