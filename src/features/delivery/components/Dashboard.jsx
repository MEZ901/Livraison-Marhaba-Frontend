import { Navbar } from "../layout/NavBar";
import { SideBar } from "../layout/SideBar";
import { useConfirmOrderMutation, useGetAllOrdersQuery } from "../../order/redux/orderApiSlice";

export const Dashboard = () => {
  
    const { data } = useGetAllOrdersQuery();
    const [confirmOrder] = useConfirmOrderMutation();

    console.log("confirmOrder", confirmOrder)
    if (!data) {
        return <p>Loading...</p>;
    }
    const handleConfirmOrder = async (orderId) => {
        try {
           
          const result = await confirmOrder({ params: { _id: orderId } });
          
          console.log(orderId)
          console.log('Order confirmed successfully', result);
        } catch (error) {
         
          console.error('Failed to confirm order', error);
        }
      };
//   console.log("xx",data.pendingOrders);

  return (  
        <div>
        <Navbar />
        <main className="flex flex-col md:flex-row">
            <SideBar />
            <section className="flex-1">
                <div id="main" className="main-content bg-gray-100 mt-12 md:mt-12 pb-24 md:pb-5">
                    <div className="overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th className="px-6 py-3">Order</th>
                            <th className="px-6 py-3">Food</th>
                            
                            <th className="px-6 py-3">Price</th>
                            <th className="px-6 py-3"><span className="sr-only">Confirm and pick up</span></th>
                        </tr>
                        </thead>
                        <tbody>
                            {data.pendingOrders?.map((product) => (
                                <div key={product.id}>
                                    {product.food.map((f, index) => (
                                        <>
                                        <tr key={index}>
                                            <td  className="px-6 py-4">1</td>
                                            <td  className="px-6 py-3">{f.name}</td>
                                            <td  className="px-6 py-3">{product.price}</td>
                                            <td  className="  px-6 py-3 ">
                                                <a onClick= {() => handleConfirmOrder(product._id)} href="#" className="font-medium text-orange-600 dark:text-orange-500 hover:underline"> confirm and pickup </a>
                                            </td>
                                        </tr>
                                       
                                        </>
                                    ))}
                                </div>
                            ))}
                        </tbody>
                    </table>
                </div>
                </div>
            </section>
        </main>
        </div>

  );
};




