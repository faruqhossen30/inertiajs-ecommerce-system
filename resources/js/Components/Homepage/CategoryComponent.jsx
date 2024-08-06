import React from 'react'

function CategoryComponent({ categories }) {
    return (
        <section className="px-3 lg:px-0">
            <div className="container mx-auto">
                <div className="py-5">
                    <h4 className="font-bold text-2xl text-gray-600">Top Category</h4>
                </div>
                <div className="grid grid-cols-12 gap-5">
                    {
                        categories.map((category, index) => {
                            return <div className="col-span-4 md:col-span-3 lg:col-span-2 " key={index}>
                                <div className=" border p-5 rounded-md text-center">
                                    <img src={window.location.protocol + '/storage/' + category.thumbnail} alt={category.name} className="w-full p-5" />
                                </div>
                                <div className="text-center p-1">
                                    <span >{category.name}</span>
                                </div>
                            </div>
                        })
                    }

                </div>

            </div>
        </section>
    )
}

export default CategoryComponent
