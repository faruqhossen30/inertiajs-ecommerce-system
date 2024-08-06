import { Tab } from '@headlessui/react'
import React, { useState } from 'react'
import ProductItem from './ProductItem'

function ProductTab() {
    const [products, setProducts] = useState([1, 2, 3, 4, 5, 6])
    return (
        <section className="px-3 lg:px-0">
            <div className="container mx-auto">
                <Tab.Group>
                    <div className="flex justify-between py-4">
                        <div>
                            <h2 className="text-2xl text-gray-500">Top Best Selling Items</h2>
                        </div>
                        <Tab.List as='div' className="space-x-3 text-gray-500">
                            <Tab>All</Tab>
                            <Tab>Men</Tab>
                            <Tab>Women</Tab>
                        </Tab.List>
                    </div>

                    <Tab.Panels>
                        <Tab.Panel>
                            <div className="grid grid-cols-12 gap-5">
                                {
                                    products.map((item, index) => {
                                        return <ProductItem key={index} product={item} />
                                    })
                                }

                            </div>
                        </Tab.Panel>
                        <Tab.Panel>
                            <div className="grid grid-cols-12 gap-5">
                                {
                                    [4, 5].map((item, index) => {
                                        return <ProductItem key={index} product={item} />
                                    })
                                }

                            </div>
                        </Tab.Panel>
                        <Tab.Panel>
                            <div className="grid grid-cols-12 gap-5">
                                {
                                    [9,8,7,6].map((item, index) => {
                                        return <ProductItem key={index} product={item} />
                                    })
                                }

                            </div>
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </section>
    )
}

export default ProductTab
