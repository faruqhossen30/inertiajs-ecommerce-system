import CategorySidebar from '@/Components/Frontend/CategorySidebar';
import Pagination from '@/Components/Frontend/Pagination';
import PostComponent from '@/Components/Frontend/PostComponent';
import AppLayout from '@/Layouts/AppLayout';
import { CodeBracketIcon, HomeIcon, MagnifyingGlassCircleIcon, MapIcon, MapPinIcon, PencilIcon } from '@heroicons/react/24/outline';
import { Head } from '@inertiajs/react';

export default function SinglePost({ post }) {
    return (
        <AppLayout>
            <Head title="Post" />
            <section className="py-16">
                <div className="container mx-auto">
                    <div className="grid grid-cols-12 gap-y-10 lg:gap-10">
                        <div className="col-span-12 lg:col-span-8">
                            <div className="border dark:border-gray-700 rounded-md ">
                                <div className="relative">
                                    <img src="assets/images/job-detail.jpg" alt="" className="rounded-md img-fluid mb-7" />
                                    <div className="absolute z-20 -bottom-7 left-7">
                                        <img src="assets/images/featured-job/img-10.png" alt="" className="rounded-md img-fluid" />
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="grid grid-cols-12">
                                        <div className="col-span-12 lg:col-span-8">
                                            <div className="relative">
                                                <h5 className="mb-1 text-gray-900 dark:text-gray-400">Product Designer / UI Designer</h5>
                                                <ul className="flex gap-4 text-gray-500 dark:text-gray-400">
                                                    <li>
                                                        <i className="mdi mdi-account"></i> 8 Vacancy
                                                    </li>
                                                    <li className="text-yellow-500">
                                                        <span className="px-2 py-1 text-white bg-yellow-500 rounded text-13">4.8</span> <i className="align-middle mdi mdi-star"></i><i className="align-middle mdi mdi-star"></i><i className="align-middle mdi mdi-star"></i><i className="align-middle mdi mdi-star"></i><i className="align-middle mdi mdi-star-half-full"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <div className="flex gap-3 md:justify-end">
                                                <div className="w-8 h-8 text-center text-gray-100 transition-all duration-300 bg-transparent border rounded cursor-pointer border-gray-100/50 hover:bg-red-600 hover:text-white hover:border-transparent dark:border-zinc-700">
                                                    <a href="#"><i className="uil uil-heart-alt text-lg leading-[1.8]"></i></a>
                                                </div>
                                                <div className="w-8 h-8 text-center text-gray-100 transition-all duration-300 bg-transparent border rounded cursor-pointer border-gray-100/50 hover:bg-red-600 hover:text-white hover:border-transparent dark:border-zinc-700">
                                                    <a href="#"><i className="uil uil-setting text-lg leading-[1.8]"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-12 mt-8 gap-y-3 lg:gap-3">
                                        <div className="col-span-12 lg:col-span-3">
                                            <div className="p-4 border rounded border-gray-100/50 dark:border-neutral-600/80">
                                                <p className="mb-1 text-gray-500 dark:text-gray-400 text-13">Experience</p>
                                                <p className="font-medium text-gray-900 dark:text-gray-400">Minimum 1 Year</p>
                                            </div>
                                        </div>
                                        <div className="col-span-12 lg:col-span-3">
                                            <div className="p-4 border rounded border-gray-100/50 dark:border-neutral-600/80">
                                                <p className="mb-1 text-gray-500 dark:text-gray-400 text-13">Employee type</p>
                                                <p className="font-medium text-gray-900 dark:text-gray-400">Full Time</p>
                                            </div>
                                        </div>
                                        <div className="col-span-12 lg:col-span-3">
                                            <div className="p-4 border rounded border-gray-100/50 dark:border-neutral-600/80">
                                                <p className="mb-1 text-gray-500 dark:text-gray-400 text-13">Position</p>
                                                <p className="font-medium text-gray-900 dark:text-gray-400">Senior</p>
                                            </div>
                                        </div>
                                        <div className="col-span-12 lg:col-span-3">
                                            <div className="p-4 border rounded border-gray-100/50 dark:border-neutral-600/80">
                                                <p className="mb-1 text-gray-500 dark:text-gray-400 text-13">Offer Salary</p>
                                                <p className="font-medium text-gray-900 dark:text-gray-400">$2150/ Month</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-5">
                                        <h5 className="mb-3 text-gray-900 dark:text-gray-400">Job Description</h5>
                                        <div>
                                            <p className="mb-0 text-gray-500 dark:text-gray-400">As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent. You will help the team design beautiful interfaces that solve business challenges for our clients. We work with a number of Tier 1 banks on building web-based applications for AML, KYC and Sanctions List management workflows. This role is ideal if you are looking to segue your career into the FinTech or Big Data arenas.</p>
                                        </div>
                                    </div>

                                    <div className="mt-5">
                                        <h5 className="mb-3 text-gray-900 dark:text-gray-400">Responsibilities</h5>
                                        <div>
                                            <p className="mb-3 text-gray-500 dark:text-gray-400">As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.</p>

                                            <ul className="mb-0 text-gray-500 dark:text-gray-400">
                                                <li className="mb-2 text-gray-500 dark:text-gray-400"><i className="mr-2 uil uil-circle"></i> Have sound knowledge of commercial activities.</li>
                                                <li className="mb-2 text-gray-500 dark:text-gray-400"><i className="mr-2 uil uil-circle"></i> Build next-generation web applications with a focus on the client side</li>
                                                <li className="mb-2 text-gray-500 dark:text-gray-400"><i className="mr-2 uil uil-circle"></i> Work on multiple projects at once, and consistently meet draft deadlines</li>
                                                <li className="mb-2 text-gray-500 dark:text-gray-400"><i className="mr-2 uil uil-circle"></i> have already graduated or are currently in any year of study</li>
                                                <li className="text-gray-500 dark:text-gray-400"><i className="mr-2 uil uil-circle"></i> Revise the work of previous designers to create a unified aesthetic for our brand materials</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="mt-5">
                                        <h5 className="mb-3 text-gray-900 dark:text-gray-400">Qualification</h5>
                                        <div>
                                            <ul className="mb-0 text-gray-500 dark:text-gray-400">
                                                <li className="mb-2 text-gray-500 dark:text-gray-400"><i className="mr-2 uil uil-circle"></i> B.C.A / M.C.A under National University course complete.</li>
                                                <li className="mb-2 text-gray-500 dark:text-gray-400"><i className="mr-2 uil uil-circle"></i> 3 or more years of professional design experience</li>
                                                <li className="mb-2 text-gray-500 dark:text-gray-400"><i className="mr-2 uil uil-circle"></i> have already graduated or are currently in any year of study </li>
                                                <li className="mb-2 text-gray-500 dark:text-gray-400"><i className="mr-2 uil uil-circle"></i> Advanced degree or equivalent experience in graphic and web design</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="mt-5">
                                        <h5 className="mb-3 text-gray-900 dark:text-gray-400">Skill & Experience</h5>
                                        <div>
                                            <ul className="mb-0 text-gray-500 dark:text-gray-400">
                                                <li className="mb-2 text-gray-500 dark:text-gray-400"><i className="mr-2 uil uil-circle"></i> Understanding of key Design Principal</li>
                                                <li className="mb-2 text-gray-500 dark:text-gray-400"><i className="mr-2 uil uil-circle"></i> Proficiency With HTML, CSS, Tailwind</li>
                                                <li className="mb-2 text-gray-500 dark:text-gray-400"><i className="mr-2 uil uil-circle"></i> Wordpress: 1 year (Required) </li>
                                                <li className="mb-2 text-gray-500 dark:text-gray-400"><i className="mr-2 uil uil-circle"></i> Experience designing and developing responsive design websites </li>
                                                <li className="mb-2 text-gray-500 dark:text-gray-400"><i className="mr-2 uil uil-circle"></i> web designing: 1 year (Preferred) </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <span className="px-2 py-1 text-white rounded text-11 group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500">PHP</span>
                                        <span className="px-2 py-1 text-white rounded text-11 group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500">JS</span>
                                        <span className="px-2 py-1 text-white rounded text-11 group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500">Marketing</span>
                                        <span className="px-2 py-1 text-white rounded text-11 group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500">REACT</span>
                                        <span className="px-2 py-1 text-white rounded text-11 group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500">PHOTOSHOP</span>
                                    </div>

                                    <ul className="flex gap-2 mb-0 md:justify-start py-10">
                                    <li>
                                        <b className="text-gray-900 dark:text-gray-50">Share post:</b>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/sharer/sharer.php?u=" target='_blank'
                                            className="px-3 py-1 text-xs font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800  focus:outline-none  dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            <svg className="w-4 h-4 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="currentColor" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd"
                                                    d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                            <span>Facebook</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/intent/tweet?url=" target='_blank'
                                            className="px-3  py-1  space-x-2 text-xs font-medium text-center inline-flex items-center text-white bg-[#1DA1F2] rounded-lg hover:bg-blue-800  focus:outline-none  dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            <svg className="w-4 h-4 text-white  dark:text-white mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="currentColor" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd"
                                                    d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                            twitter
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/shareArticle?mini=true&url=" target='_blank'
                                            className="px-3  py-1  space-x-2 text-xs font-medium text-center inline-flex items-center text-white bg-[#E4405F] rounded-lg hover:bg-blue-800  focus:outline-none  dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            <svg className="w-4 h-4 text-white mr-1 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor" fill-rule="evenodd"
                                                    d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                            instagram
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/shareArticle?mini=true&url=" target='_blank'
                                            className="px-3  py-1  space-x-2 text-xs font-medium text-center inline-flex items-center text-white bg-[#0A66C2] rounded-lg hover:bg-blue-800  focus:outline-none  dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            <svg className="w-4 h-4 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="currentColor" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd"
                                                    d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                                                    clip-rule="evenodd" />
                                                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                                            </svg>
                                            linkedin
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://api.whatsapp.com/send?text=" target='_blank'
                                            className="px-3  py-1  space-x-2 text-xs font-medium text-center inline-flex items-center text-white bg-green-400 rounded-md hover:bg-blue-800  focus:outline-none  dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                                <path
                                                    d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                                            </svg>
                                            <span className="ml-2">Whatsup</span>
                                        </a>
                                    </li>
                                </ul>

                                </div>

                            </div>
                            <div className="mt-10 space-y-8">
                                <h5 className="text-gray-900 dark:text-gray-400">Related Jobs</h5>

                                <div className="relative overflow-hidden transition-all duration-500 ease-in-out bg-white border rounded-md border-gray-100/50 group group-data-[theme-color=violet]:hover:border-violet-500 group-data-[theme-color=sky]:hover:border-sky-500 group-data-[theme-color=red]:hover:border-red-500 group-data-[theme-color=green]:hover:border-green-500 group-data-[theme-color=pink]:hover:border-pink-500 group-data-[theme-color=blue]:hover:border-blue-500 hover:-translate-y-2 dark:bg-neutral-900 dark:border-neutral-600">
                                    <div className="p-6">
                                        <div className="grid grid-cols-12 gap-5">
                                            <div className="col-span-12 lg:col-span-1">
                                                <div className="mb-4 text-center mb-md-0">
                                                    <a href="company-details.html"><img src="assets/images/featured-job/img-01.png" alt="" className="mx-auto img-fluid rounded-3" /></a>
                                                </div>
                                            </div>

                                            <div className="col-span-12 lg:col-span-10">
                                                <h5 className="mb-1 text-gray-900 fs-17"><a href="job-details.html" className="dark:text-gray-400">HTML Developer</a>
                                                    <small className="font-normal text-gray-500 dark:text-gray-400">(0-2 Yrs Exp.)</small>
                                                </h5>
                                                <ul className="flex flex-wrap gap-3 mb-0">
                                                    <li>
                                                        <p className="mb-0 text-sm text-gray-500 dark:text-gray-400">Creative Agency</p>
                                                    </li>
                                                    <li>
                                                        <p className="mb-0 text-sm text-gray-500 dark:text-gray-400"><i className="mdi mdi-map-marker"></i> New York</p>
                                                    </li>
                                                    <li>
                                                        <p className="mb-0 text-sm text-gray-500 dark:text-gray-400"><i className="uil uil-wallet"></i> $250 - $800 / month</p>
                                                    </li>
                                                </ul>
                                                <div className="mt-4">
                                                    <div className="flex flex-wrap gap-1.5">
                                                        <span className="bg-green-500/20 text-green-500 text-11 px-2 py-0.5 font-medium rounded">Full Time</span>
                                                        <span className="bg-yellow-500/20 text-yellow-500 text-11 px-2 py-0.5 font-medium rounded">Urgent</span>
                                                        <span className="bg-sky-500/20 text-sky-500 text-11 px-2 py-0.5 font-medium rounded">Private</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="px-4 py-3 bg-gray-50 dark:bg-neutral-700">
                                        <div className="grid grid-cols-12">
                                            <div className="col-span-12 lg:col-span-6">
                                                <ul className="flex flex-wrap gap-2 text-gray-700 dark:text-gray-400">
                                                    <li><i className="uil uil-tag"></i> Keywords :</li>
                                                    <li><a href="#" className="text-gray-500 dark:text-gray-400">Ui designer</a>,</li>
                                                    <li><a href="#" className="text-gray-500 dark:text-gray-400">developer</a></li>
                                                </ul>
                                            </div>

                                            <div className="col-span-12 mt-2 lg:col-span-6 lg:mt-0">
                                                <div className="ltr:lg:text-end rtl:lg:text-start dark:text-gray-400">
                                                    <a href="#applyNow" data-bs-toggle="modal">Apply Now <i className="mdi mdi-chevron-double-right"></i></a>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="absolute top-4 ltr:right-4 rtl:left-4">
                                        <div className="w-8 h-8 text-center text-gray-100 transition-all duration-300 bg-transparent border rounded border-gray-100/50 hover:bg-red-600 hover:text-white hover:border-transparent dark:border-zinc-700">
                                            <a href="#"><i className="uil uil-heart-alt text-lg leading-[1.8]"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative overflow-hidden transition-all duration-500 ease-in-out bg-white border rounded-md border-gray-100/50 group group-data-[theme-color=violet]:hover:border-violet-500 group-data-[theme-color=sky]:hover:border-sky-500 group-data-[theme-color=red]:hover:border-red-500 group-data-[theme-color=green]:hover:border-green-500 group-data-[theme-color=pink]:hover:border-pink-500 group-data-[theme-color=blue]:hover:border-blue-500 hover:-translate-y-2 dark:bg-neutral-900 dark:border-neutral-600">
                                    <div className="p-6">
                                        <div className="grid grid-cols-12 gap-5">
                                            <div className="col-span-12 lg:col-span-1">
                                                <div className="mb-4 text-center mb-md-0">
                                                    <a href="company-details.html"><img src="assets/images/featured-job/img-02.png" alt="" className="mx-auto img-fluid rounded-3" /></a>
                                                </div>
                                            </div>

                                            <div className="col-span-10">
                                                <h5 className="mb-1 text-gray-900 fs-17"><a href="job-details.html" className="dark:text-gray-400">Marketing Director</a>
                                                    <small className="font-normal text-gray-500 dark:text-gray-400">(2-4 Yrs Exp.)</small>
                                                </h5>
                                                <ul className="flex flex-wrap gap-3 mb-0">
                                                    <li>
                                                        <p className="mb-0 text-sm text-gray-500 dark:text-gray-400">Jobcy Technology Pvt.Ltd</p>
                                                    </li>
                                                    <li>
                                                        <p className="mb-0 text-sm text-gray-500 dark:text-gray-400"><i className="mdi mdi-map-marker"></i> California</p>
                                                    </li>
                                                    <li>
                                                        <p className="mb-0 text-sm text-gray-500 dark:text-gray-400"><i className="uil uil-wallet"></i> $250 - $800 / month</p>
                                                    </li>
                                                </ul>
                                                <div className="mt-4">
                                                    <div className="flex flex-wrap gap-1.5">
                                                        <span className="bg-red-500/20 text-red-500 text-11 px-2 py-0.5 font-medium rounded">Part Time</span>
                                                        <span className="bg-sky-500/20 text-sky-500 text-11 px-2 py-0.5 font-medium rounded">Private</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="px-4 py-3 bg-gray-50 dark:bg-neutral-700">
                                        <div className="grid grid-cols-12">
                                            <div className="col-span-12 lg:col-span-6">
                                                <ul className="flex flex-wrap gap-2 text-gray-700 dark:text-gray-400">
                                                    <li><i className="uil uil-tag"></i> Keywords :</li>
                                                    <li><a href="#" className="text-gray-500 dark:text-gray-400">Ui designer</a>,</li>
                                                    <li><a href="#" className="text-gray-500 dark:text-gray-400">developer</a></li>
                                                </ul>
                                            </div>

                                            <div className="col-span-12 mt-2 lg:col-span-6 lg:mt-0">
                                                <div className="ltr:lg:text-end rtl:lg:text-start dark:text-gray-400">
                                                    <a href="#applyNow" data-bs-toggle="modal">Apply Now <i className="mdi mdi-chevron-double-right"></i></a>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="absolute top-4 ltr:right-4 rtl:left-4">
                                        <div className="w-8 h-8 text-center text-white bg-red-600 rounded">
                                            <a href="#"><i className="uil uil-heart-alt text-lg leading-[1.9]"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative overflow-hidden transition-all duration-500 ease-in-out bg-white border rounded-md border-gray-100/50 group group-data-[theme-color=violet]:hover:border-violet-500 group-data-[theme-color=sky]:hover:border-sky-500 group-data-[theme-color=red]:hover:border-red-500 group-data-[theme-color=green]:hover:border-green-500 group-data-[theme-color=pink]:hover:border-pink-500 group-data-[theme-color=blue]:hover:border-blue-500 hover:-translate-y-2 dark:bg-neutral-900 dark:border-neutral-600">
                                    <div className="p-6">
                                        <div className="grid grid-cols-12 gap-5">
                                            <div className="col-span-12 lg:col-span-1">
                                                <div className="mb-4 text-center mb-md-0">
                                                    <a href="company-details.html"><img src="assets/images/featured-job/img-03.png" alt="" className="mx-auto img-fluid rounded-3" /></a>
                                                </div>
                                            </div>

                                            <div className="col-span-10">
                                                <h5 className="mb-1 text-gray-900 fs-17"><a href="job-details.html" className="dark:text-gray-400">HTML Developer</a>
                                                    <small className="font-normal text-gray-500 dark:text-gray-400">(2-4 Yrs Exp.)</small>
                                                </h5>
                                                <ul className="flex flex-wrap gap-3 mb-0">
                                                    <li>
                                                        <p className="mb-0 text-sm text-gray-500 dark:text-gray-400">Jobcy Technology Pvt.Ltd</p>
                                                    </li>
                                                    <li>
                                                        <p className="mb-0 text-sm text-gray-500 dark:text-gray-400"><i className="mdi mdi-map-marker"></i> California</p>
                                                    </li>
                                                    <li>
                                                        <p className="mb-0 text-sm text-gray-500 dark:text-gray-400"><i className="uil uil-wallet"></i> $250 - $800 / month</p>
                                                    </li>
                                                </ul>
                                                <div className="mt-4">
                                                    <div className="flex flex-wrap gap-1.5">
                                                        <span className="bg-violet-500/20 text-violet-500 text-11 px-2 py-0.5 font-medium rounded">Freelance</span>
                                                        <span className="bg-sky-500/20 text-sky-500 text-11 px-2 py-0.5 font-medium rounded">Internship</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="px-4 py-3 bg-gray-50 dark:bg-neutral-700">
                                        <div className="grid grid-cols-12">
                                            <div className="col-span-12 lg:col-span-6">
                                                <ul className="flex flex-wrap gap-2 text-gray-700 dark:text-gray-400">
                                                    <li><i className="uil uil-tag"></i> Keywords :</li>
                                                    <li><a href="#" className="text-gray-500 dark:text-gray-400">Ui designer</a>,</li>
                                                    <li><a href="#" className="text-gray-500 dark:text-gray-400">developer</a></li>
                                                </ul>
                                            </div>

                                            <div className="col-span-12 mt-2 lg:col-span-6 lg:mt-0">
                                                <div className="ltr:lg:text-end rtl:lg:text-start dark:text-gray-400">
                                                    <a href="#applyNow" data-bs-toggle="modal">Apply Now <i className="mdi mdi-chevron-double-right"></i></a>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="absolute top-4 ltr:right-4 rtl:left-4">
                                        <div className="w-8 h-8 text-center text-gray-100 transition-all duration-300 bg-transparent border rounded border-gray-100/50 hover:bg-red-600 hover:text-white hover:border-transparent dark:border-zinc-700">
                                            <a href="#"><i className="uil uil-heart-alt text-lg leading-[1.8]"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 text-center">
                                    <a href="job-list.html" className="font-medium text-gray-900 dark:text-gray-400">View More <i className="mdi mdi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 space-y-6 lg:col-span-4">
                            <div className="border rounded border-gray-100/30 dark:border-neutral-600/80">
                                <div className="p-6">
                                    <h6 className="text-gray-900 text-17 dark:text-gray-400">Job Overview</h6>

                                    <ul>
                                        <li>
                                            <div className="flex mt-6">
                                                <i className="uil uil-user icon group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=sky]:bg-sky-500/20 group-data-[theme-color=red]:bg-red-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=pink]:bg-pink-500/20 group-data-[theme-color=blue]:bg-blue-500/20 h-12 w-12 text-center leading-[2.4] text-xl group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500 rounded-full"></i>
                                                <div className="ltr:ml-4 rtl:mr-4">
                                                    <h6 className="mb-2 text-sm text-gray-900 dark:text-gray-400">Job Title</h6>
                                                    <p className="text-gray-500 dark:text-gray-400">Product Designer</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex mt-6">
                                                <i className="uil uil-star-half-alt icon group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=sky]:bg-sky-500/20 group-data-[theme-color=red]:bg-red-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=pink]:bg-pink-500/20 group-data-[theme-color=blue]:bg-blue-500/20 h-12 w-12 text-center leading-[2.4] text-xl group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500 rounded-full"></i>
                                                <div className="ltr:ml-4 rtl:mr-4">
                                                    <h6 className="mb-2 text-sm text-gray-900 dark:text-gray-400">Experience</h6>
                                                    <p className="text-gray-500 dark:text-gray-400"> 0-3 Years</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex mt-6">
                                                <i className="uil uil-location-point icon group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=sky]:bg-sky-500/20 group-data-[theme-color=red]:bg-red-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=pink]:bg-pink-500/20 group-data-[theme-color=blue]:bg-blue-500/20 h-12 w-12 text-center leading-[2.4] text-xl group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500 rounded-full"></i>
                                                <div className="ltr:ml-4 rtl:mr-4">
                                                    <h6 className="mb-2 text-sm text-gray-900 dark:text-gray-400">Location</h6>
                                                    <p className="text-gray-500 dark:text-gray-400"> New york</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex mt-6">
                                                <i className="uil uil-usd-circle icon group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=sky]:bg-sky-500/20 group-data-[theme-color=red]:bg-red-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=pink]:bg-pink-500/20 group-data-[theme-color=blue]:bg-blue-500/20 h-12 w-12 text-center leading-[2.4] text-xl group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500 rounded-full"></i>
                                                <div className="ltr:ml-4 rtl:mr-4">
                                                    <h6 className="mb-2 text-sm text-gray-900 dark:text-gray-400">Offered Salary</h6>
                                                    <p className="text-gray-500 dark:text-gray-400">$35k - $45k</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex mt-6">
                                                <i className="uil uil-graduation-cap icon group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=sky]:bg-sky-500/20 group-data-[theme-color=red]:bg-red-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=pink]:bg-pink-500/20 group-data-[theme-color=blue]:bg-blue-500/20 h-12 w-12 text-center leading-[2.4] text-xl group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500 rounded-full"></i>
                                                <div className="ltr:ml-4 rtl:mr-4">
                                                    <h6 className="mb-2 text-sm text-gray-900 dark:text-gray-400">Qualification</h6>
                                                    <p className="text-gray-500 dark:text-gray-400">Bachelor Degree</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex mt-6">
                                                <i className="uil uil-building icon group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=sky]:bg-sky-500/20 group-data-[theme-color=red]:bg-red-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=pink]:bg-pink-500/20 group-data-[theme-color=blue]:bg-blue-500/20 h-12 w-12 text-center leading-[2.4] text-xl group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500 rounded-full"></i>
                                                <div className="ltr:ml-4 rtl:mr-4">
                                                    <h6 className="mb-2 text-sm text-gray-900 dark:text-gray-400">Industry</h6>
                                                    <p className="text-gray-500 dark:text-gray-400">Private</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex mt-6">
                                                <i className="uil uil-history icon group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=sky]:bg-sky-500/20 group-data-[theme-color=red]:bg-red-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=pink]:bg-pink-500/20 group-data-[theme-color=blue]:bg-blue-500/20 h-12 w-12 text-center leading-[2.4] text-xl group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500 rounded-full"></i>
                                                <div className="ltr:ml-4 rtl:mr-4">
                                                    <h6 className="mb-2 text-sm text-gray-900 dark:text-gray-400">Date Posted</h6>
                                                    <p className="text-gray-500 dark:text-gray-400">Posted 2 hrs ago</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>

                                    <div className="mt-8 space-y-2">
                                        <a href="#applyNow" data-bs-toggle="modal" className="btn w-full group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500 border-transparent text-white hover:-translate-y-1.5">Apply Now <i className="uil uil-arrow-right"></i></a>
                                        <a href="bookmark-jobs.html" className="btn w-full bg-yellow-500/20 border-transparent text-yellow-500 hover:-translate-y-1.5 dark:bg-yellow-500/30"><i className="uil uil-bookmark"></i> Add Bookmark</a>
                                    </div>
                                </div>
                            </div>
                            <div className="border rounded border-gray-100/30 dark:border-neutral-600/80">
                                <div className="p-6">
                                    <div>
                                        <img src="assets/images/featured-job/img-02.png" alt="" className="mx-auto img-fluid" />

                                        <div className="mt-4 text-center">
                                            <h6 className="text-gray-900 text-17 dark:text-gray-400">Jobcy Technology Pvt.Ltd</h6>
                                            <p className="text-gray-500 dark:text-gray-400">Since July 2017</p>
                                        </div>

                                        <ul className="mt-4 space-y-4">
                                            <li>
                                                <div className="flex">
                                                    <i className="text-xl uil uil-phone-volume group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500"></i>
                                                    <div className="ltr:ml-3 rtl:mr-3">
                                                        <h6 className="mb-1 text-sm text-gray-900 dark:text-gray-400">Phone</h6>
                                                        <p className="text-sm text-gray-500 dark:text-gray-400">+589 560 56555</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="mt-3">
                                                <div className="flex">
                                                    <i className="text-xl uil uil-envelope group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500"></i>
                                                    <div className="ltr:ml-3 rtl:mr-3">
                                                        <h6 className="mb-1 text-sm text-gray-900 dark:text-gray-400">Email</h6>
                                                        <p className="text-sm text-gray-500 dark:text-gray-400">pixltechnology@info.com</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="mt-3">
                                                <div className="flex">
                                                    <i className="text-xl uil uil-globe group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500"></i>
                                                    <div className="ltr:ml-3 rtl:mr-3">
                                                        <h6 className="mb-1 text-sm text-gray-900 dark:text-gray-400">Website</h6>
                                                        <p className="mb-0 text-gray-500 dark:text-gray-400 fs-14 text-break">www.Jobcytechnology.pvt.ltd.com</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="mt-3">
                                                <div className="flex">
                                                    <i className="text-xl uil uil-map-marker group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500"></i>
                                                    <div className="ltr:ml-3 rtl:mr-3">
                                                        <h6 className="mb-1 text-sm text-gray-900 dark:text-gray-400">Location</h6>
                                                        <p className="text-sm text-gray-500 dark:text-gray-400">Oakridge Lane Richardson.</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>

                                        <div className="mt-6">
                                            <a href="company-details.html" className="w-full text-white border-transparent btn group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500"><i className="mdi mdi-eye"></i> View Profile</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h6 className="mb-3 text-16 dark:text-gray-400">Job location</h6>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1628067715234!5m2!1sen!2sin" height="250" allowFullScreen="" loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </AppLayout>
    );
}
