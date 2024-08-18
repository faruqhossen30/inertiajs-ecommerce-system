import Input from '@/Components/Form/Input';
import InputLabel from '@/Components/Form/InputLabel';
import SubmitButton from '@/Components/Form/SubmitButton';
import UserSidebarComponent from '@/Components/User/UserSidebarComponent';
import AppLayout from '@/Layouts/AppLayout';
import { HomeIcon, ListBulletIcon, MapPinIcon, PlusIcon, UserIcon } from '@heroicons/react/24/outline';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function ProfilePageEdit({ user }) {
    const { auth } = usePage().props;
    const [avatar, setAvatar] = useState('');
    const { data, setData, post, processing, errors, reset } = useForm({
        name: user.name,
        mobile: user.mobile ?? '',
        address: user.address ?? '',
        bio: user.bio ?? '',
        avatar: null,
        status: 1,
    });


    function submit(e) {
        e.preventDefault()
        post(route('user.profile.update'));
    }

    function thumbnailChangeHandaller(e) {
        setData('avatar', e.target.files[0]);
        setAvatar(URL.createObjectURL(e.target.files[0]));
    }


    return (
        <AppLayout>
            <Head title="Dashboard" />

            <div className="container grid grid-cols-12 gap-5">
                <div className="col-span-3 py-3 hidden md:block">
                    <UserSidebarComponent />
                </div>
                <div className="col-span-12 md:col-span-9 ">
                    <div className="bg-white dark:bg-gray-800 py-2 px-2 my-3 border border-gray-200 dark:border-gray-700 rounded-md">
                        <span className="text-gray-600 dark:text-gray-400 text-lg font-bold">Edit My Profile</span>
                    </div>
                    <div className="p-5 border shadow-md">
                        <form onSubmit={submit}>

                            <div className="flex justify-center">
                                {
                                    avatar ?
                                        <img src={avatar} className="max-w-xs rounded-md shadow-md border" alt="Profile" />
                                        : <img src={auth.user.avatar ? window.location.origin + auth.user.avatar : window.location.origin + '/profile.png'} className="max-w-xs rounded-md shadow-md" alt="Profile" />
                                }

                            </div>
                            <div className="flex justify-center">
                                <div className="text-center">
                                    <InputLabel isRequired={true} labelFor="Profile Picture" />
                                    <input id="avatar" type="file" name="avatar" placeholder="avatar" onChange={(e) => thumbnailChangeHandaller(e)} />
                                    <p className="text-sm text-red-600 mt-2">{errors.avatar}</p>
                                </div>
                            </div>


                            <div>
                                <InputLabel isRequired={true} labelFor="name" />
                                <Input id="name" type="text" name="name" value={data.name} autoComplete="name" placeholder="name" onChange={(e) => setData('name', e.target.value)} />
                                <p className="text-sm text-red-600 mt-2">{errors.name}</p>
                            </div>
                            <div>
                                <InputLabel isRequired={true} labelFor="Mobile" />
                                <Input id="mobile" type="text" name="mobile" value={data.mobile} placeholder="01xxxxxxxxx" onChange={(e) => setData('mobile', e.target.value)} />
                                <p className="text-sm text-red-600 mt-2">{errors.mobile}</p>
                            </div>
                            <div>
                                <InputLabel isRequired={true} labelFor="Address" />
                                <Input id="Address" type="text" name="address" value={data.address} placeholder="Address" onChange={(e) => setData('address', e.target.value)} />
                                <p className="text-sm text-red-600 mt-2">{errors.address}</p>
                            </div>
                            <div>
                                <InputLabel isRequired={true} labelFor="About Me" />
                                <textarea id="bio" rows={5} type="file" name="bio" placeholder="Write about me." onChange={(e) => setData('bio', e.target.value)}
                                    className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">{data.bio}</textarea>
                                <p className="text-sm text-red-600 mt-2">{errors.bio}</p>
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
        </AppLayout>
    );
}
