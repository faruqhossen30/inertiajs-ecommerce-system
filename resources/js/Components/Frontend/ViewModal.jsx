import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import PostSlider from './Products/PostSlider'

export default function ViewModal() {
    let [isOpen, setIsOpen] = useState(true)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center">
                <button
                    type="button"
                    onClick={openModal}
                    className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                >
                    Open dialog
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/50" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-6xl transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all">

                                    <div className="grid grid-cols-12 gap-6 relative">

                                        <div className="col-span-6 py-6">
                                            <PostSlider />
                                        </div>
                                        <div className="col-span-6">
                                            <div className=" space-y-3">
                                                <div className="">
                                                    <p className="text-green-600 font-medium py-4">Bakery Biscuits</p>
                                                    <h3 className='text-3xl font-semibold text-gray-800'>Napolitanke Ljesnjak</h3>

                                                    <div className="flex space-x-3 pt-2">

                                                        <div className="flex text-yellow-400">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                                            </svg>


                                                        </div>
                                                        <p className='text-green-600 font-medium'>(30 reviews)</p>
                                                    </div>

                                                    <div className="py-4  space-x-3">
                                                        <span className="font-bold text-2xl text-black">$32</span>
                                                        <span className="line-through text-xl text-gray-600 font-bold">$35</span>
                                                        <span><small className=" font-semibold text-sm ms-2 text-red-500">26% Off</small></span>
                                                    </div>
                                                </div>

                                                <hr />
                                                <div className="">
                                                    <div className=" space-x-2 py-3">
                                                        <button type="button" className=" px-4 py-2 border rounded-lg border-gray-400 hover:bg-gray-500">250g</button>
                                                        <button type="button" className=" px-4 py-2 border rounded-lg border-gray-400 hover:bg-gray-500">500g</button>
                                                        <button type="button" className=" px-4 py-2 border rounded-lg border-gray-400 hover:bg-gray-500">1kg</button>
                                                    </div>

                                                    <div className="flex items-center py-1">
                                                        <button className=" border hover:bg-gray-300 text-gray-600  px-2 py-1 rounded-l" onClick="decrement()">-</button>
                                                        <input type="text" value="0" className="w-9 h-8 text-center border-t border-b border-gray-300" id="quantity-input" />
                                                        <button className=" border hover:bg-gray-300 text-gray-600  px-2 py-1 rounded-r" onClick="increment()">+</button>
                                                    </div>

                                                    <div className="mt-3 flex flex-wrap justify-start gap-2 items-center pb-2">
                                                        <div className="lg:w-1/3 md:w-2/5 w-1/2">
                                                            {/* Primary Button */}
                                                            <button type="button" className="btn-primary inline-flex items-center justify-center w-full py-2 px-4 bg-lime-500 text-white font-semibold rounded-md hover:bg-lime-700">
                                                                <i className="feather-icon icon-shopping-bag mr-2"></i>
                                                                Add to cart
                                                            </button>
                                                        </div>
                                                        <div className="md:w-1/3 w-2/5 flex gap-2">
                                                            {/* Compare Button */}
                                                            <a href="#" className="btn-light inline-flex items-center justify-center px-3 py-2 bg-gray-200 text-gray-700 font-semibold rounded-md hover:bg-gray-200" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Compare">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                                                                </svg>

                                                            </a>
                                                            {/* Wishlist Button */}
                                                            <a href="#!" className="btn-light inline-flex items-center justify-center px-3 py-2 bg-gray-200 text-gray-700 font-semibold rounded-md hover:bg-gray-300" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Wishlist">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                                                </svg>

                                                            </a>
                                                        </div>

                                                    </div>
                                                </div>

                                                <hr />
                                                <div className=" space-y-5 py-3">
                                                    <div className="flex space-x-24 text-gray-500  text-sm font-semibold">
                                                        <h6>Product Code:</h6>
                                                        <p>FBB00255</p>
                                                    </div>
                                                    <div className="flex space-x-[120px] text-gray-500 text-sm  font-semibold">
                                                        <h6>Availability:</h6>
                                                        <p>In Stock</p>
                                                    </div>
                                                    <div className="flex space-x-[160px] text-gray-500  text-sm font-semibold">
                                                        <h6>Type:</h6>
                                                        <p>Fruits</p>
                                                    </div>
                                                    <div className="flex space-x-[130px] text-gray-500  text-sm font-semibold">
                                                        <h6>Shipping:</h6>
                                                        <p>01 day shipping. ( Free pickup today)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" absolute z-50 top-right">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                            </svg>

                                        </div>
                                    </div>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
