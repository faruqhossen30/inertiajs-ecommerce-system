import { ArrowRightCircleIcon, HeartIcon, MapPinIcon } from "@heroicons/react/24/outline"
import { Link } from "@inertiajs/react"

function PostComponent({ post }) {
    return (
        <div className="col-span-12 border dark:border-gray-700 rounded-md relative ">
            <div className="flex justify-between items-center p-4">
                <div className="flex items-start space-x-4">
                    <div>
                        <img src="./home.jpg" className="w-20 h-20 rounded-md" alt="" />
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="space-y-1">
                            <Link href={route('single.post', post.slug)}><h4 className="text-lg font-semibold text-gray-800 dark:text-gray-400">{post.title}</h4></Link>
                            <div className="flex space-x-2">
                                <MapPinIcon className="text-gray-800 dark:text-gray-400 w-5 h-5" />
                                <span className="text-gray-800 dark:text-gray-400">{post.address}</span>
                                <span className="text-gray-800 dark:text-gray-400"> | ৳ {post.price} TK</span>
                            </div>
                            <div className="flex space-x-2">
                                <span className="bg-green-500/20 text-green-500  text-xs px-2 py-1 font-semibold rounded-md">3 Rooms</span>
                                <span className="bg-yellow-500/20 text-yellow-500  text-xs px-2 py-1 font-semibold rounded-md">1 Dining</span>
                                <span className="bg-violet-500/20 text-violet-500  text-xs px-2 py-1 font-semibold rounded-md">1 Kichen</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <span className="text-gray-600 dark:text-gray-400 text-xs font-semibold">3 Minues ago</span>
                </div>
            </div>
            <div className="px-4 py-2 border-t dark:border-t-gray-700 flex items-center justify-between bg-gray-100 dark:bg-gray-800 rounded-b-md">
                <span className="text-gray-800 dark:text-gray-400">Exprience : <span>1-2 Years</span></span>
                <a href="#" className="flex items-center space-x-2 font-semibold">
                    <span className="text-gray-600 dark:text-gray-400 text-sm">Apply Now</span>
                    <ArrowRightCircleIcon className="w-4 h-4" />
                </a>
            </div>
            <div className="absolute top-0 right-0 p-2">
                <HeartIcon className="w-5 h-5 text-gray-400" />
            </div>
        </div>
    )
}

export default PostComponent
