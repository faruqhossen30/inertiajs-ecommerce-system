
import { useForm } from '@inertiajs/react';
import BreadcumComponent from '@/Components/Dashboard/BreadcumComponent';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputLabel from '@/Components/Form/InputLabel';
import Input from '@/Components/Form/Input';
import SubmitButton from '@/Components/Form/SubmitButton';


export default function Create({ attribute }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        attribute_id :attribute.id,
        status: 1,
    });

    function submit(e) {
        e.preventDefault()
        post(route('attributevalue.store',attribute.id));
    }

    return (
        <AuthenticatedLayout>
            <BreadcumComponent pageOne="Attributes" pageOneRoute="attributes.index" />

            <div className="grid grid-cols-12 gap-10">
                <div className="col-span-8">
                    <div className="flex flex-col">
                        <div className="-m-1.5 overflow-x-auto">
                            <div className="p-1.5 min-w-full inline-block align-middle">
                                <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">

                                    {/* <!-- Table --> */}
                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                        <thead className="bg-gray-50 dark:bg-slate-800">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-left">
                                                    <div className="flex items-center gap-x-2">
                                                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                            S.N
                                                        </span>
                                                    </div>
                                                </th>

                                                <th scope="col" className="px-6 py-3 text-left">
                                                    <div className="flex items-center gap-x-2">
                                                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                            Name
                                                        </span>
                                                    </div>
                                                </th>

                                                <th scope="col" className="px-6 py-3 text-left">
                                                    <div className="flex items-center gap-x-2">
                                                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                            Status
                                                        </span>
                                                    </div>
                                                </th>


                                                <th scope="col" className="px-6 py-3 text-left">
                                                    <div className="flex items-center gap-x-2">
                                                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                            Action
                                                        </span>
                                                    </div>
                                                </th>


                                            </tr>
                                        </thead>

                                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">

                                            {
                                                attribute.values.map((item, index) => {
                                                    return <tr key={index}>
                                                        <td className="h-px w-px whitespace-nowrap">
                                                            <div className="px-6 py-2">
                                                                <span className="text-sm text-gray-600 dark:text-gray-400">{item.id}</span>
                                                            </div>
                                                        </td>
                                                        <td className="h-px w-px whitespace-nowrap">
                                                            <div className="px-6 py-2">
                                                                <span className="text-sm text-gray-600 dark:text-gray-400">{item.name}</span>
                                                            </div>
                                                        </td>
                                                        <td className="h-px w-px whitespace-nowrap">
                                                            <div className="px-6 py-2">
                                                                <img src={window.location.protocol + '/' + window.location.host + '/' + item.image} alt="" className="h-4" />
                                                            </div>
                                                        </td>

                                                        <td className="h-px w-px whitespace-nowrap">
                                                            <div className="px-6 py-2">
                                                                <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                                                    <svg className="w-2.5 h-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                                    </svg>
                                                                    Active
                                                                </span>
                                                            </div>
                                                        </td>

                                                    </tr>
                                                })
                                            }


                                        </tbody>
                                    </table>
                                    {/* <!-- End Table --> */}

                                    {/* <Pagination pagination={attributes} links={attributes.links} /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                        <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-neutral-700">
                            <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                               {attribute.name} Attribute
                            </p>
                        </div>
                        <div className="p-4 md:p-5">
                            <div className=" px-2 py-2 mx-auto">
                                <form onSubmit={submit}>
                                    <div>
                                        <InputLabel isRequired={true} labelFor="name" />
                                        <Input id="name" type="text" name="name" value={data.name} autoComplete="name" placeholder="name" onChange={(e) => setData('name', e.target.value)} />
                                        <p className="text-sm text-red-600 mt-2">{errors.name}</p>
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
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






        </AuthenticatedLayout>
    );
}
