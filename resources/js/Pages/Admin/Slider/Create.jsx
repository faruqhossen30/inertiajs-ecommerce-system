
import { useForm } from '@inertiajs/react';
import BreadcumComponent from '@/Components/Dashboard/BreadcumComponent';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputLabel from '@/Components/Form/InputLabel';
import Input from '@/Components/Form/Input';
import SubmitButton from '@/Components/Form/SubmitButton';
import ThumbnailInput from '@/Components/Form/ThumbnailInput';


export default function Create({ auth,categories }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        description: '',
        thumbnail: null,
        category_id: '',
    });

    function submit(e) {
        e.preventDefault()
        post(route('sliders.store'));
    }

    return (
        <AuthenticatedLayout>
            <BreadcumComponent pageOne="Sliders" pageOneRoute="sliders.index" />

            <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-neutral-700">
                    <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                        Slider Create
                    </p>
                </div>
                <div className="p-4 md:p-5">
                    <div className=" px-2 py-2 sm:px-6 lg:px-4 mx-auto">
                        <form onSubmit={submit}>
                            <div>
                                <InputLabel isRequired={true} labelFor="Select Category" />
                                <select id="category_id" name="category_id" className="py-2 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                    onChange={(e) => setData('category_id', e.target.value)}>
                                    <option>Select Category</option>
                                    {categories.map((cat, index) => {
                                        return <option value={cat.id} key={index}>{cat.name}</option>
                                    })}
                                </select>
                                <p className="text-sm text-red-600 mt-2">{errors.status}</p>
                            </div>
                            <div>
                                <InputLabel isRequired={true} labelFor="title" />
                                <Input id="title" type="text" name="title" value={data.name} autoComplete="title" placeholder="title" onChange={(e) => setData('title', e.target.value)} />
                                <p className="text-sm text-red-600 mt-2">{errors.title}</p>
                            </div>

                            <div className="mt-2">
                                <label for="description" className="sr-only">Description</label>
                                <textarea id="description" name="description" rows="4" onChange={(e) => setData('description', e.target.value)} className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="description" ></textarea>
                            </div>
                            <div className="max-w-xs">
                                <InputLabel isRequired={true} labelFor="thumbnail" />
                                <ThumbnailInput name="thumbnail" setData={setData} errors={errors} placeholder="Thumbnail" />
                            </div>
                            <SubmitButton />
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
