"use client";
import AddNewCustomer from "@/components/AddNewCustomer";
import CategoryBar from "@/components/CategoryBar";
import ProductItem from "@/components/ProductItem";
import SideBar from "@/components/SideBar";
import { Store } from "@/utils/Store";
import data from "@/utils/data";
import Head from "next/head";
import { useContext, useState } from "react";

export default function Home() {
  const { state, dispatch } = useContext(Store);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isCategoryBarOpen, setIsCategoryBarOpen] = useState(false);
  const [isNewCustomerOpen, setIsNewCustomerOpen] = useState(false);
  const {
    cart: { cartItems },
  } = state;

  const handleToggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };
  const handleToggleCategoryBar = () => {
    setIsCategoryBarOpen(!isCategoryBarOpen);
  };
  const handleToggleNewCustomer = () => {
    setIsNewCustomerOpen(!isNewCustomerOpen);
  };

  const removeItemHandler = (item) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };

  const updateCartHandler = (item, qty) => {
    const quantity = Number(qty);
    dispatch({ type: "CART_ADD_ITEM", payload: { ...item, quantity } });
  };

  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      const newQuantity = item.quantity - 1;
      updateCartHandler(item, newQuantity);
    }
  };

  const increaseQuantity = (item) => {
    if (item.quantity < item.countInStock) {
      const newQuantity = item.quantity + 1;
      updateCartHandler(item, newQuantity);
    }
  };
  const subtotal = cartItems.reduce((a, c) => a + c.quantity * c.price, 0);
  const tax = subtotal * 0.05;
  const shippingCost = 50.67;
  const discount = 10;

  return (
    <>
      <Head>
        <title>Martvill | POS</title>
      </Head>
      <div className="flex lg:flex-row flex-col p-2">
        <div className="lg:w-[46%] w-full">
          {/* Buttons start */}
          <div className="flex md:flex-row flex-col items-center justify-end xl:gap-3 md:gap-0 px-2">
            <button
              className="xl:px-2 lg:px-0 px-2 xl:mr-3 lg:mr-0 mr-3"
              onClick={handleToggleSideBar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="xl:w-10 lg:w-6 w-8 xl:h-10 lg:h-6 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
            <div className="flex flex-col w-full lg:justify-end justify-center md:flex-row xl:gap-3 lg:gap-1 md:gap-5">
              <button className="flex justify-center items-center gap-1 xl:text-base lg:text-sm text-base font-medium text-blue-600 bg-blue-100 hover:bg-blue-200 px-3 py-2 rounded mb-2 md:mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="xl:w-6 lg:w-5 w-6 xl:h-6 lg:h-5 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
                Note
              </button>
              <button className="flex justify-center items-center gap-1 xl:text-base lg:text-sm text-base font-medium text-blue-600 bg-blue-100 hover:bg-blue-200 px-3 py-2 rounded mb-2 md:mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="xl:w-6 lg:w-5 w-6 xl:h-6 lg:h-5 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>
                Shipping
              </button>
              <button className="flex justify-center items-center gap-1 xl:text-base lg:text-sm text-base font-medium text-blue-600 bg-blue-100 hover:bg-blue-200 px-3 py-2 rounded mb-2 md:mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-circle-dashed xl:w-6 lg:w-5 w-6 xl:h-6 lg:h-5 h-6"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95" />
                  <path d="M3.69 8.56a9 9 0 0 0 -.69 3.44" />
                  <path d="M3.69 15.44a9 9 0 0 0 1.95 2.92" />
                  <path d="M8.56 20.31a9 9 0 0 0 3.44 .69" />
                  <path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95" />
                  <path d="M20.31 15.44a9 9 0 0 0 .69 -3.44" />
                  <path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92" />
                  <path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69" />
                </svg>
                Hold Orders
              </button>
              <button className="flex justify-center items-center gap-1 xl:text-base lg:text-xs text-base font-medium text-blue-600 bg-blue-100 hover:bg-blue-200 px-3 py-2 rounded mb-2 md:mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="xl:w-6 lg:w-5 w-6 xl:h-6 lg:h-5 h-6 fill-blue-600 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                New Item
              </button>
            </div>
          </div>
          {/* Buttons end */}
          {/* Profile name and add new user Start */}
          <div className="bg-blue-100 rounded flex justify-between items-center py-3 px-6 mt-2 mr-2">
            <h2 className="flex items-center font-medium gap-2 text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              Steve Jobs
            </h2>
            <button
              className="hover:bg-blue-300 rounded-full"
              onClick={handleToggleNewCustomer}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7 text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          </div>
          {/* Profile name and add new user End */}
          {/* Table start */}
          <div className="relative overflow-x-auto mt-3">
            {cartItems.length === 0 ? (
              <div className="text-center font-semibold rounded-md text-red-500 bg-white p-4 my-2">
                <p>There are no items in this cart!</p>
              </div>
            ) : (
              <div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                  <tbody>
                    {cartItems.map((item) => (
                      <tr className="bg-white" key={item.slug}>
                        <td className="pr-1 py-1 text-right">
                          <button className="hover:text-blue-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                              />
                            </svg>
                          </button>
                        </td>
                        <td className="px-2 py-2 font-medium text-gray-600 whitespace-nowrap border-t border-b border-l">
                          {item.productName}
                        </td>
                        <td className="px-4 py-2 font-medium text-gray-600 border-t border-b">
                          {item.price}
                        </td>
                        <td className="px-4 py-2 border-t border-b">
                          <div className="flex flex-row justify-center items-center">
                            <button onClick={() => decreaseQuantity(item)}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-7 h-7 inline-block mx-1 fill-gray-600 hover:fill-gray-700 text-white"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                              </svg>
                            </button>
                            <span className="font-medium text-gray-600">
                              {item.quantity}
                            </span>
                            <button onClick={() => increaseQuantity(item)}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-7 h-7 inline-block mx-1 fill-gray-600 hover:fill-gray-700 text-white"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                              </svg>
                            </button>
                          </div>
                        </td>
                        <td className="pl-4 py-2 font-medium text-gray-600 border-t border-b border-r">
                          ${(item.quantity * item.price).toFixed(2)}
                        </td>
                        <td className="px-1 py-1">
                          <button onClick={() => removeItemHandler(item)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-5 h-5 text-red-500 hover:text-white hover:bg-red-500 hover:rounded-md transition-all"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                              />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
          {/* Table end */}
          {/* Calculation start */}
          {cartItems.length > 0 ? (
            <div className="my-5 flex flex-col">
              <div className="flex justify-end">
                <div className="flex justify-between items-center w-52 border-t p-1 mr-2">
                  <h6 className="font-normal text-xs text-gray-600">
                    Sub Total
                  </h6>
                  <h3 className="font-semibold text-base text-gray-800">
                    ${subtotal}
                  </h3>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="flex justify-between items-center w-52 border-t p-1 mr-2">
                  <h6 className="font-normal text-xs text-gray-600">TAX</h6>
                  <h3 className="font-semibold text-base text-gray-800">
                    ${tax.toFixed(2)}
                    <span className="text-[10px] text-gray-600">(5%)</span>
                  </h3>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="flex justify-between items-center w-52 border-t p-1 mr-2">
                  <h6 className="font-normal text-xs text-gray-600">
                    Shipping
                  </h6>
                  <h3 className="font-semibold text-base text-gray-800">
                    ${shippingCost}
                  </h3>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="flex justify-between items-center w-52 border-t p-1 mr-2">
                  <h6 className="font-semibold text-xs text-blue-600">
                    Discount on Cart
                  </h6>
                  <h3 className="font-semibold text-base text-gray-800">
                    ${discount}
                  </h3>
                </div>
              </div>
            </div>
          ) : null}
          {/* Calculation end */}
          {/* Product count and Total count start */}
          <div className="bg-blue-100 rounded flex justify-between items-center p-3 mr-2">
            <div>
              <h6 className="text-sm text-blue-600">
                Products Count({cartItems.reduce((a, c) => a + c.quantity, 0)})
              </h6>
            </div>
            <div className="flex items-center gap-20">
              <h2 className="font-semibold text-xl text-blue-600">Total</h2>
              <h2 className="font-semibold text-xl text-blue-600">
                $
                {cartItems.length > 0
                  ? (subtotal + tax + shippingCost - discount).toFixed(2)
                  : 0}
              </h2>
            </div>
          </div>
          {/* Product count and Total count end */}
          {/* Cancle, Hold, Discount, PayNow Button start */}
          <div className="my-2 flex flex-col md:flex-row md:justify-between md:mr-2">
            <button className="flex justify-center gap-2 xl:px-5 lg:px-2 px-5 xl:py-2 lg:py-2 py-2 rounded items-center bg-red-200 text-red-500 hover:bg-red-300 font-semibold xl:text-xl lg:text-sm text-xl mb-2 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="xl:w-6 lg:w-5 w-6 xl:h-6 lg:h-5 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Cancel
            </button>
            <button className="flex justify-center gap-2 xl:px-5 lg:px-2 px-5 xl:py-2 lg:py-2 py-2 rounded items-center bg-[#DEE1F3] hover:bg-[#d3d8f1] text-[#6C78CA] font-semibold xl:text-xl lg:text-sm text-xl mb-2 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-hand-grab xl:w-6 lg:w-5 w-6 xl:h-6 lg:h-5 h-6"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 11v-3.5a1.5 1.5 0 0 1 3 0v2.5" />
                <path d="M11 9.5v-3a1.5 1.5 0 0 1 3 0v3.5" />
                <path d="M14 7.5a1.5 1.5 0 0 1 3 0v2.5" />
                <path d="M17 9.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47" />
              </svg>
              Hold
            </button>
            <button className="flex justify-center gap-2 xl:px-5 lg:px-2 px-5 xl:py-2 lg:py-2 py-2 rounded items-center bg-[#DEE1F3] hover:bg-[#d3d8f1] text-[#6C78CA] font-semibold xl:text-xl lg:text-sm text-xl mb-2 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-circle-percentage xl:w-6 lg:w-5 w-6 xl:h-6 lg:h-5 h-6"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                <path d="M9 15.075l6 -6" />
                <path d="M9 9.105v.015" />
                <path d="M15 15.12v.015" />
              </svg>
              Discount
            </button>
            <button className="flex justify-center gap-2 xl:px-5 lg:px-2 px-5 xl:py-2 lg:py-2 py-2 rounded items-center bg-blue-100 hover:bg-blue-200 text-blue-500 font-semibold xl:text-xl lg:text-sm text-xl mb-2 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="xl:w-6 lg:w-5 w-6 xl:h-6 lg:h-5 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                />
              </svg>
              Pay Now
            </button>
          </div>
          {/* Cancle, Hold, Discount, PayNow Button end */}
        </div>
        {/* Right Side start */}
        <div className="bg-[#F4F6F8] lg:w-[54%] w-full lg:mt-0 mt-5">
          {/* Search start */}
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search Products..."
              className="w-full py-2 pl-8 pr-12 shadow-md focus:outline-none focus:border-blue-500"
            />
            <svg
              className="absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M20 20l-5.5-5.5M12 17a5 5 0 100-10 5 5 0 000 10z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-barcode absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500 cursor-pointer"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 7v-1a2 2 0 0 1 2 -2h2" />
              <path d="M4 17v1a2 2 0 0 0 2 2h2" />
              <path d="M16 4h2a2 2 0 0 1 2 2v1" />
              <path d="M16 20h2a2 2 0 0 0 2 -2v-1" />
              <path d="M5 11h1v2h-1z" />
              <path d="M10 11l0 2" />
              <path d="M14 11h1v2h-1z" />
              <path d="M19 11l0 2" />
            </svg>
          </div>
          {/* Search end */}
          {/* Category and Product Start */}
          <div className="border-[#C2C2C3] border-l px-4 py-2">
            {/* Category start */}
            <div className="sm:flex hidden justify-between gap-1">
              <button className="px-4 py-1 text-gray-500 hover:text-blue-500 border border-slate-500 hover:border-blue-500 rounded font-semibold xl:text-sm md:text-xs">
                All Categories
              </button>
              <button className="px-4 py-1 text-gray-500 hover:text-blue-500 border border-slate-500 hover:border-blue-500 rounded font-semibold xl:text-sm md:text-xs">
                Electronics
              </button>
              <button className="px-4 py-1 text-gray-500 hover:text-blue-500 border border-slate-500 hover:border-blue-500 rounded font-semibold xl:text-sm md:text-xs">
                Home & Lifestyle
              </button>
              <button className="px-4 py-1 text-gray-500 hover:text-blue-500 border border-slate-500 hover:border-blue-500 rounded font-semibold xl:text-sm md:text-xs">
                Men Fashion
              </button>
              <button className="px-4 py-1 text-gray-500 hover:text-blue-500 border border-slate-500 hover:border-blue-500 rounded font-semibold xl:text-sm md:text-xs">
                Women Fashion
              </button>
              <button
                className="text-gray-500 hover:text-blue-500"
                onClick={handleToggleCategoryBar}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                  />
                </svg>
              </button>
            </div>
            <div className="md:hidden sm:flex justify-center items-center text-center">
              <button
                className="text-gray-600 hover:text-blue-500"
                onClick={handleToggleCategoryBar}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-grid-dots"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  <path d="M19 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  <path d="M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  <path d="M19 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                </svg>
              </button>
            </div>
            {/* Category end */}
            {/* Product Start */}
            <div className="flex flex-wrap justify-between gap-2">
              {/* Card 1 */}
              {data?.products?.map((product) => (
                <ProductItem product={product} key={product.slug} />
              ))}
            </div>
            {/* Product End */}
          </div>
          {/* Category and Product End */}
        </div>
        {/* Right Side end */}
      </div>
      {/* Draweres start */}
      {isSideBarOpen && (
        <>
          <div className="bg-[#BCBFC2]/60 fixed top-0 h-screen w-screen flex flex-row justify-start z-[2001]">
            <div onClick={handleToggleSideBar} className="flex-1"></div>
            <SideBar isOpen={isSideBarOpen} onClose={handleToggleSideBar} />
          </div>
        </>
      )}
      {isCategoryBarOpen && (
        <>
          <div className="bg-[#BCBFC2]/60 fixed top-0 h-screen w-screen flex flex-row justify-start z-[2001]">
            <div onClick={handleToggleCategoryBar} className="flex-1"></div>
            <CategoryBar
              isCategoryBarOpen={isCategoryBarOpen}
              onCloseCategoryBar={handleToggleCategoryBar}
            />
          </div>
        </>
      )}
      {isNewCustomerOpen && (
        <>
          <div className="bg-[#BCBFC2]/60 fixed top-0 h-screen w-screen flex flex-row justify-start z-[2001]">
            <div onClick={handleToggleNewCustomer} className="flex-1"></div>
            <AddNewCustomer
              isNewCustomerOpen={isNewCustomerOpen}
              onCloseNewCustomer={handleToggleNewCustomer}
            />
          </div>
        </>
      )}
      {/* Draweres end */}
    </>
  );
}
