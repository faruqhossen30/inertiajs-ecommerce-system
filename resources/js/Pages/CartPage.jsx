import BreadcumComponent from '@/Components/Dashboard/BreadcumComponent';
import BlogComponent from '@/Components/Frontend/BlogComponent';
import Pagination from '@/Components/Frontend/Pagination';
import AppLayout from '@/Layouts/AppLayout';
import { Head, Link } from '@inertiajs/react';

export default function cartPage() {

    return (
        <AppLayout>
            <Head title="Blogs" />
            <section className="container mx-auto px-3 lg:px-0">
                <BreadcumComponent pageOne="Cart" pageOneRoute="cartpage" />
            </section>

           <div className="container mx-auto">
           <div class="flex flex-col">
  <div class="-m-1.5 overflow-x-auto">
    <div class="p-1.5 min-w-full inline-block align-middle">
      <div class="overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200 ">
          <thead>
            <tr>
              <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase ">Product</th>
              <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase ">Price</th>
              <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase ">Quantity</th>
              <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase ">Total</th>
              <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase ">Remove</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 ">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">John Brown</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">45</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">New York No. 1 Lake Park</td>
              <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400">Delete</button>
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">Jim Green</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">27</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">London No. 1 Lake Park</td>
              <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400">Delete</button>
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">Joe Black</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">31</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">Sidney No. 1 Lake Park</td>
              <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
           </div>

        </AppLayout>
    );
}





