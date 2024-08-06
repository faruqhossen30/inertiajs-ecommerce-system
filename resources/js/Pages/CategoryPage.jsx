import BreadcumComponent from "@/Components/Dashboard/BreadcumComponent";
import AppLayout from "@/Layouts/AppLayout";
import { Link } from "@inertiajs/react";

function CategoryPage({ categories }) {

    return (
        <AppLayout>
            <section className="container mx-auto px-3 lg:px-0">
                <BreadcumComponent pageOne="Products" pageOneRoute="productpage" />
            </section>
            <section>
                {
                    categories.map((category, index) => {
                        return <div className="container mx-auto">
                            <div className="flex justify-between py-5">
                                <h4 className="text-xl font-bold text-emerald-500 border-b-4 border-b-emerald-400">{category.name}</h4>
                                <Link href='#' className="text-emerald-500">View All</Link>
                            </div>
                            <div className="grid grid-cols-12 gap-5">
                                {category.subcategories  &&
                                    category.subcategories.map((subcategory, index) => {
                                        console.log(subcategory);
                                        return <div className="col-span-4 md:col-span-3 lg:col-span-2 " key={subcategory.slug}>
                                            <div className=" border p-5 rounded-md text-center">
                                                <img src={window.location.protocol + '/storage/' + subcategory.thumbnail} alt={subcategory.thumbnail} className="w-full p-5" />
                                            </div>
                                            <div className="text-center p-1">
                                                <span >{subcategory.name} </span>
                                            </div>
                                        </div>
                                    })
                                }

                            </div>
                        </div>
                    })
                }


            </section>
        </AppLayout>
    )
}

export default CategoryPage
